export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectContactsFilter(state);
  if (!filter) {
    return contacts;
  } else {
    const normFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
    return filteredContacts;
  }
};
