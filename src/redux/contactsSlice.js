import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const statusPending = state => {
  state.contacts.isLoading = true;
};

const statusRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
  extraReducers: {
    [fetchContacts.pending]: statusPending,
    [fetchContacts.rejected]: statusRejected,
    [addContact.pending]: statusPending,
    [addContact.rejected]: statusRejected,
    [deleteContact.pending]: statusPending,
    [deleteContact.rejected]: statusRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const newItems = state.contacts.items.filter(
        ({ id }) => id !== action.payload.id
      );
      state.contacts.items = newItems;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
