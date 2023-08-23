import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact, removeContact } from './operations';
import Notiflix from 'notiflix';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const fetchContactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: fetchContactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          state.data = action.payload;
        } else {
          state.data = [];
        }
      })
      .addCase(getContacts.rejected, handleRejected)

      .addCase(createContact.pending, handlePending)
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          Notiflix.Notify.success('Adding new contact');
          state.data.push(action.payload);
        }
      })
      .addCase(createContact.rejected, handleRejected)

      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload) {
          Notiflix.Notify.failure('Deleting contact');
          const index = state.data.findIndex(
            element => element.id === action.payload.id
          );
          if (index > -1) {
            state.data.splice(index, 1);
          }
        }
      })
      .addCase(removeContact.rejected, handleRejected);

    // [getContacts.pending](state) {
    //   state.isLoading = true;
    // },
    // [getContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.data = action.payload;
    // },
    // [getContacts.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const fetchReducer = fetchContactsSlice.reducer;
