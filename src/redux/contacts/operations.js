import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://661a3bd9125e9bb9f29b9700.mockapi.io';

// опрацювати правильно помилки! response.status

// GET @ /contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// PATCH @ /contacts/:id

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /contacts

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async ({ name, number }, thunkAPI) => {
    const newContact = {
      name,
      number,
    };

    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
