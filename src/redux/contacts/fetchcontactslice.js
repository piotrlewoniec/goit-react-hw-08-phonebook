import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  removeContact,
  downloadContacts,
  uploadContact,
  deleteContact,
  updateContact,
} from './operations';
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
  isEditing: false,
  idEdit: '',
};

const fetchContactsSlice = createSlice({
  name: 'fetchContacts',
  initialState: fetchContactsInitialState,
  reducers: {
    setIsEditing: {
      reducer(state, action) {
        state.isEditing = action.payload.status;
        state.idEdit = action.payload.id;
      },
      prepare({ id, status }) {
        return {
          payload: {
            id,
            status,
          },
        };
      },
    },
  },
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
      .addCase(removeContact.rejected, handleRejected)

      .addCase(downloadContacts.pending, handlePending)
      .addCase(downloadContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload !== 'error') {
          state.data = action.payload;
        } else {
          state.data = [];
        }
      })
      .addCase(downloadContacts.rejected, handleRejected)

      .addCase(uploadContact.pending, handlePending)
      .addCase(uploadContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload !== 'error') {
          Notiflix.Notify.success('Adding new contact');
          state.data.push(action.payload);
        }
      })
      .addCase(uploadContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload !== 'error') {
          Notiflix.Notify.failure('Deleting contact');
          const index = state.data.findIndex(
            element => element.id === action.payload.id
          );
          if (index > -1) {
            state.data.splice(index, 1);
          }
        }
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload !== 'error') {
          Notiflix.Notify.info('Updating contact');
          const index = state.data.findIndex(
            element => element.id === action.payload.id
          );
          if (index > -1) {
            state.data[index] = action.payload;
          }
        }
      })
      .addCase(updateContact.rejected, handleRejected);

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

export const { setIsEditing } = fetchContactsSlice.actions;
export const fetchReducer = fetchContactsSlice.reducer;
