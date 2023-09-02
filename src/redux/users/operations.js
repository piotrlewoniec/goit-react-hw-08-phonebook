import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDefaultURLHeroKuapp,
  headerDefaultRegister,
  headerDefaultLogin,
  headerDefaultLogout,
  headerDefaulUserInfo,
} from 'js/config/stdquery';

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const header = { ...headerDefaultRegister, ...headerDefaultURLHeroKuapp };
      const response = await axiosData({ header: header, data: credentials });
      return response.data;
      //response. ---->
      // status: 201
      // statusText: "Created"
      // status: 400
      // statusText: "Bad Request"
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const header = { ...headerDefaultLogin, ...headerDefaultURLHeroKuapp };
      const response = await axiosData({ header: header, data: credentials });
      return response.data;
      //response. ---->
      // status: 200
      // statusText: "OK"
      // status: 400
      // statusText: "Bad Request"
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.user.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Not logged in');
    }
    const header = {
      ...headerDefaultLogout,
      ...headerDefaultURLHeroKuapp,
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosData({ header: header });
    return response.data;
    //response. ---->
    // status: 200
    // statusText: "OK"
    //response.response ---->
    // status: 401
    // statusText: "Unauthorized"
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const userinfo = createAsyncThunk(
  'user/userinfo',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Not logged in');
      }
      const header = {
        ...headerDefaulUserInfo,
        ...headerDefaultURLHeroKuapp,
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axiosData({ header: header });
      return response.data;
      //response. ---->
      // status: 200
      // statusText: "OK"
      //response.response ---->
      // status: 401
      // statusText: "Unauthorized"
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
