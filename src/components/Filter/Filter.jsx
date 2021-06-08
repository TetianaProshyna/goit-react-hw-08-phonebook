import styles from "./Filter.module.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "../../redux/phonebook/actions";
import selectors from "../../redux/phonebook/selectors";

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(action.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
