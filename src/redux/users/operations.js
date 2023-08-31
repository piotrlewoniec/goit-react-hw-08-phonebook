import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosData } from 'js/apireset/axios-data';
import {
  headerDeafultURLHeroKuapp,
  headerDefaultRegister,
  headerDeafulLogin,
  headerDeafulLogout,
  headerDeafulUserInfo,
} from 'js/config/stdquery';

const tokenlogin =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVmOWNjNmQzYjNiYTAwMTQ5OWJjZDAiLCJpYXQiOjE2OTM0Nzc0NzJ9.wHnxq1fTbuJ5gS_2XPoMEF3_kzaK-nE7VAPrxxbV37U';

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
      const header = { ...headerDefaultRegister, ...headerDeafultURLHeroKuapp };
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
      const header = { ...headerDeafulLogin, ...headerDeafultURLHeroKuapp };
      const response = await axiosData({ header: header, data: credentials });
      console.log(response);
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
    const header = {
      ...headerDeafulLogout,
      ...headerDeafultURLHeroKuapp,
      headers: { Authorization: `Bearer ${tokenlogin}` },
    };
    const response = await axiosData({ header: header });
    console.log(response);
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
      const header = {
        ...headerDeafulUserInfo,
        ...headerDeafultURLHeroKuapp,
        headers: { Authorization: `Bearer ${tokenlogin}` },
      };
      const response = await axiosData({ header: header });
      console.log(response);
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

// testo
// test123@gmail.pl
// kukels123

const handleApi = async evt => {
  console.log('get user current');

  // const tokenregister =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ0YjNmN2U0NDIyZjAwMTQ5YjE3NWMiLCJpYXQiOjE2OTE2NjEzMDN9.FHKP0AhRxi8n1mzAKlltTGKkVgoTQkz5RQRnn2Ki8_g';

  // const tokenlogin =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ0YjNmN2U0NDIyZjAwMTQ5YjE3NWMiLCJpYXQiOjE2OTE2ODc5MDN9.pId5UvuPe1u8BM2yc3acqO1dhZ601nx0D9wxdxXEo2w';

  // const header1 = {
  //   method: 'post',
  //   accept: 'application/json',
  //   baseURL: 'https://connections-api.herokuapp.com/users/signup',
  // };

  // const header2 = {
  //   method: 'post',
  //   accept: 'application/json',
  //   baseURL: 'https://connections-api.herokuapp.com/users/login',
  // };

  // const header3 = {
  //   method: 'get',
  //   accept: 'application/json',
  //   baseURL: 'https://connections-api.herokuapp.com/',
  //   url: '/users/current',
  //   headers: { Authorization: `Bearer ${tokenlogin}` },
  // };

  // const header4 = {
  //   method: 'post',
  //   accept: 'application/json',
  //   baseURL: 'https://connections-api.herokuapp.com/',
  //   url: '/users/logout',
  //   headers: { Authorization: `Bearer ${tokenlogin}` },
  // };

  // axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
  // axios.defaults.headers.common.Authorization = `Bearer ${tokenlogin}`;

  // const auth1 = {
  //   name: 'Testas Crosese',
  //   email: 'testoftest@test.pl',
  //   password: 'examplepwd123452312313123123',
  // };

  // const auth2 = {
  //   email: 'testoftest@test.pl',
  //   password: 'examplepwd123452312313123123',
  // };

  //register
  // const response = await axiosData({
  //   header: header1,
  //   data: auth1,
  // });

  // //login
  // const response = await axiosData({
  //   header: header2,
  //   data: auth2,
  // });

  //current user
  // const response = await axiosData({
  //   header: header3,
  // });

  //logout user
  // const response = await axiosData({
  //   header: header4,
  // });

  // const response = await axios({
  //   method: 'get',
  //   url: 'https://connections-api.herokuapp.com/users/current',
  //   headers: {
  //     Authorization: `Bearer ${tokenlogin}`,
  //   },
  // });

  // const response = await axios.get(
  //   'https://connections-api.herokuapp.com/users/current',
  //   {
  //     headers: {
  //       Authorization: `Bearer ${tokenlogin}`,
  //     },
  //   }
  // );

  // const response2 = await axios.get('/users/current');

  const header5 = {
    method: 'get',
    accept: 'application/json',
    baseURL: 'https://connections-api.herokuapp.com/',
    url: '/contacts',
    headers: { Authorization: `Bearer ${tokenlogin}` },
  };

  const header6 = {
    method: 'post',
    accept: 'application/json',
    baseURL: 'https://connections-api.herokuapp.com/',
    url: '/contacts',
    headers: { Authorization: `Bearer ${tokenlogin}` },
  };

  const header7 = {
    method: 'patch',
    accept: 'application/json',
    baseURL: 'https://connections-api.herokuapp.com/',
    url: '/contacts/64d51dd0e4422f00149b184b',
    headers: { Authorization: `Bearer ${tokenlogin}` },
  };

  const header8 = {
    method: 'delete',
    accept: 'application/json',
    baseURL: 'https://connections-api.herokuapp.com/',
    url: '/contacts/64d51dd0e4422f00149b184b',
    headers: { Authorization: `Bearer ${tokenlogin}` },
  };

  //get contacts
  const response = await axiosData({
    header: header5,
  });

  //creat contact
  // const response = await axiosData({
  //   header: header6,
  //   data: {
  //     name: 'Dzon Don',
  //     number: '312312 32112 312',
  //   },
  // });

  //update contact
  // const response = await axiosData({
  //   header: header7,
  //   data: {
  //     name: 'Dzon Don Dfdas',
  //     number: '0896012 087602 08609862',
  //   },
  // });

  //delete contact
  // const response = await axiosData({
  //   header: header8,
  // });

  //
  // const response = await axiosData({
  //   header: header1,
  //   authorization: authorization,
  //   auth: auth,
  //   authorizationHeaders: authorizationHeaders,
  // });
  console.log(response);
  // console.log(response2);
};
