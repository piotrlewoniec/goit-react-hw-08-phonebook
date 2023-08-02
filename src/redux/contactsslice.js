import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Harry Potter', number: '459-12-56' },
//   { id: 'id-6', name: 'Hermione Grande', number: '443-89-12' },
//   { id: 'id-7', name: 'Diana Prince', number: '645-17-79' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.push(action.payload);
    // },
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(element => element.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
