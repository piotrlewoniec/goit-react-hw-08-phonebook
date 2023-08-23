import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsslice';
import filterReducer from './filter/searchfilterslice';
import { fetchReducer } from './contacts/fetchcontactslice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    server: fetchReducer,
  },
});

export default store;
