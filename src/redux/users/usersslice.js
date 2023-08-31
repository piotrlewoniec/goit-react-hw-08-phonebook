import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, userinfo } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(userinfo.pending, (state, action) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(userinfo.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(userinfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

export const userReducer = userSlice.reducer;
