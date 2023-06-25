import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = true;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts.push(payload);
      console.log(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.loading = true;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = store.contacts.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
