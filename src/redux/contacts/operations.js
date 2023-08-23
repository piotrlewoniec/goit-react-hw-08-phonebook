import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultGet,
  headerDefaultPost,
  headerDefaultDelete,
  headerDeafultURL,
} from 'js/config/stdquery';

export const getContacts = createAsyncThunk(
  'fetchContacts/get',
  async (_, thunkAPI) => {
    try {
      const header = { ...headerDefaultGet, ...headerDeafultURL };
      header.url = '/contacts';
      const response = await axiosData({ header: header });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'fetchContacts/create',
  async (newContact, thunkAPI) => {
    try {
      const header = { ...headerDefaultPost, ...headerDeafultURL };
      header.url = '/contacts';
      // header.data = JSON.stringify(newContact);
      // const data = JSON.stringify(newContact);
      // const response = await axiosData({header:header, data:new});
      const response = await axiosData({ header: header, data: newContact });
      // fetch('https://64c560bfc853c26efadac8fe.mockapi.io/api/pml/v1/contacts', {
      //   method: 'POST',
      //   headers: { 'content-type': 'application/json' },
      //   // Send your data in the request body as JSON
      //   body: JSON.stringify(newContact),
      // });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'fetchContacts/remove',
  async (id, thunkAPI) => {
    try {
      const header = { ...headerDefaultDelete, ...headerDeafultURL };
      header.url = `/contacts/${id}`;
      // header.url = `/contacts/50`;
      const response = await axiosData({ header: header });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
