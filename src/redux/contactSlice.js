import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload.message;
    },
    [addContact.pending]: store => {
      store.isLoading = true;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
      console.log(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.isLoading = true;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
