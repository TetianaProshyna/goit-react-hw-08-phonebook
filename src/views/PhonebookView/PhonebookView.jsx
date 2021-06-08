import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "../../components/Container";
import Section from "../../components/Section";
import ContactForm from "../../components/ContactForm";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";
import selectors from "../../redux/phonebook/selectors";
import operations from "../../redux/phonebook/operations";
import styles from "./PhonebookView.module.scss";

export class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <div className={styles.phonebookWrapper}>
          <Section className={"formSection"} title={"Phonebook"}>
            <ContactForm />
          </Section>

          <Section className={"contactsSection"} title={"Contacts"}>
            <Filter />
            {this.props.isLoading && <p>Loading...</p>}
            <ContactList />
          </Section>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

PhonebookView.propTypes = {
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
