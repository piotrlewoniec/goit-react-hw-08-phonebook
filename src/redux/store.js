import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsslice';
import filterReducer from './searchfilterslice';
import { fetchReducer } from './fetchcontactslice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    server: fetchReducer,
  },
});

export default store;
