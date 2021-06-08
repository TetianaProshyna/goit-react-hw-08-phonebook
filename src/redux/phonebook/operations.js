import axios from "axios";
import actions from "./actions";
// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error.message)));
};

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error.message)));
};
const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`./contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactError(error.message)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
