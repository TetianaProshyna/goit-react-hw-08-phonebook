import ContactItem from "../ContactItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import operations from "../../redux/phonebook/operations";
import selectors from "../../redux/phonebook/selectors";

const ContactList = ({ list, onClick }) => {
  return (
    list.length > 0 && (
      <ul>
        {list.map((item) => (
          <ContactItem
            key={item.id}
            id={item.id}
            onClick={onClick}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    )
  );
};
ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: selectors.getVisibleContacts(state),
});
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
