import { createSelector } from "@reduxjs/toolkit";

const getIsLoading = (state) => state.contacts.loading;

const getContactsList = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;
const getVisibleContacts = createSelector(
  [getFilter, getContactsList],
  (filter, items) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsLoading,
  getContactsList,
  getFilter,
  getVisibleContacts,
};
