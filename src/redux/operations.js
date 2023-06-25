import * as Api from '../components/API';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CONTACTS = 'contacts/fetch';
const ADD_CONTACT = 'contact/add';
const DELETE_CONTACT = 'contact/delete';

export const fetchContacts = createAsyncThunk(
  FETCH_CONTACTS,
  async (_, thunkApi) => {
    try {
      const data = await Api.getContacts();
      return data;
    } catch (error) {
      const serializedError = {
        message: error.message,
        code: error.code,
      };
      return thunkApi.rejectWithValue(serializedError);
    }
  }
);

export const addContact = createAsyncThunk(
  ADD_CONTACT,
  async (contact, { rejectWithValue }) => {
    try {
      const result = await Api.addContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  DELETE_CONTACT,
  async (id, { rejectWithValue }) => {
    try {
      await Api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
