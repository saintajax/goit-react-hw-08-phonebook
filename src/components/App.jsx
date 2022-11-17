import React, { useEffect } from 'react';
import { Box } from './Box/Box';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      width="800px"
      display="flex"
      flexDirection="column"
      ml="auto"
      mr="auto"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          {filteredContacts.length > 0 ? <ContactsList /> : ''}
        </>
      ) : (
        ''
      )}
      {isLoading && <Loader />}
    </Box>
  );
};
