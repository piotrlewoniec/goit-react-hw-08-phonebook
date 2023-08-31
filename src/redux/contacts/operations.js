import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultGet,
  headerDefaultPost,
  headerDefaultDelete,
  headerDeafultURL,
  headerDeafultURLHeroKuapp,
  headerDeafulDownload,
  headerDeafulUpload,
  headerDeafulDelete,
  headerDefaultUpdate,
} from 'js/config/stdquery';

const tokenlogin =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVmOWNjNmQzYjNiYTAwMTQ5OWJjZDAiLCJpYXQiOjE2OTM0Nzc0NzJ9.wHnxq1fTbuJ5gS_2XPoMEF3_kzaK-nE7VAPrxxbV37U';

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

//https://connections-api.herokuapp.com/docs/

export const downloadContacts = createAsyncThunk(
  'fetchContacts/downloadContacts',
  async (_, thunkAPI) => {
    try {
      const header = {
        ...headerDeafulDownload,
        ...headerDeafultURLHeroKuapp,
        headers: { Authorization: `Bearer ${tokenlogin}` },
      };
      const response = await axiosData({ header: header });
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const uploadContact = createAsyncThunk(
  'fetchContacts/uploadContact',
  async (newContact, thunkAPI) => {
    try {
      const header = {
        ...headerDeafulUpload,
        ...headerDeafultURLHeroKuapp,
        headers: { Authorization: `Bearer ${tokenlogin}` },
      };
      console.log(newContact);
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
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'fetchContacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const header = {
        ...headerDeafulDelete,
        ...headerDeafultURLHeroKuapp,
        headers: { Authorization: `Bearer ${tokenlogin}` },
      };
      header.url = `/contacts/${id}`;
      const response = await axiosData({ header: header });
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'fetchContacts/updateContact',
  async (data, thunkAPI) => {
    try {
      const header = {
        ...headerDefaultUpdate,
        ...headerDeafultURLHeroKuapp,
        headers: { Authorization: `Bearer ${tokenlogin}` },
      };
      header.url = `/contacts/${data.id}`;
      const response = await axiosData({
        header: header,
        data: data.newContactData,
      });
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
