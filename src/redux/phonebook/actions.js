import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction("contact/fetchContactRequest");
const fetchContactSuccess = createAction("contact/fetchContactSuccess");
const fetchContactError = createAction("contact/fetchContactError");

const addContactRequest = createAction("contact/addContactRequest");
const addContactSuccess = createAction("contact/addContactSuccess");
const addContactError = createAction("contact/addContactError");

const deleteContactRequest = createAction("contact/deleteContactRequest");
const deleteContactSuccess = createAction("contact/deleteContactSuccess");
const deleteContactError = createAction("contact/deleteContactError");

const changeFilter = createAction("changeFilter");

// eslint-disable-next-line
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
