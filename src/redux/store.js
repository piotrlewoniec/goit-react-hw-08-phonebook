import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsslice';
import filterReducer from './filter/searchfilterslice';
import { fetchReducer } from './contacts/fetchcontactslice';
import { userReducer } from './users/usersslice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    server: fetchReducer,
    user: userReducer,
  },
});

export default store;
