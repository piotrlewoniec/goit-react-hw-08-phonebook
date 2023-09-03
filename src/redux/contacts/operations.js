import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultGet,
  headerDefaultPost,
  headerDefaultDelete,
  headerDefaultURL,
  headerDefaultURLHeroKuapp,
  headerDefaultDownload,
  headerDefaultUpload,
  headerDefaultRemove,
  headerDefaultUpdate,
} from 'js/config/stdquery';

export const getContacts = createAsyncThunk(
  'fetchContacts/get',
  async (_, thunkAPI) => {
    try {
      const header = { ...headerDefaultGet, ...headerDefaultURL };
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
      const header = { ...headerDefaultPost, ...headerDefaultURL };
      header.url = '/contacts';
      const response = await axiosData({ header: header, data: newContact });
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
      const header = { ...headerDefaultDelete, ...headerDefaultURL };
      header.url = `/contacts/${id}`;
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
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Not logged in');
      }
      const header = {
        ...headerDefaultDownload,
        ...headerDefaultURLHeroKuapp,
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axiosData({ header: header });
      if (response.status === 200) {
        return response.data;
      } else return 'error';
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const uploadContact = createAsyncThunk(
  'fetchContacts/uploadContact',
  async (newContact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Not logged in');
      }
      const header = {
        ...headerDefaultUpload,
        ...headerDefaultURLHeroKuapp,
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axiosData({ header: header, data: newContact });
      if (response.status === 201) {
        return response.data;
      } else return 'error';
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'fetchContacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Not logged in');
      }
      const header = {
        ...headerDefaultRemove,
        ...headerDefaultURLHeroKuapp,
        headers: { Authorization: `Bearer ${token}` },
      };
      header.url = `/contacts/${id}`;
      const response = await axiosData({ header: header });
      if (response.status === 200) {
        return response.data;
      } else return 'error';
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'fetchContacts/updateContact',
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Not logged in');
      }
      const header = {
        ...headerDefaultUpdate,
        ...headerDefaultURLHeroKuapp,
        headers: { Authorization: `Bearer ${token}` },
      };
      header.url = `/contacts/${data.id}`;
      const response = await axiosData({
        header: header,
        data: data.newContactData,
      });
      if (response.status === 200) {
        return response.data;
      } else return 'error';
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
