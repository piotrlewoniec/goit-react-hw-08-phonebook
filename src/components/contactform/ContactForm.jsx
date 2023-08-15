// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Button } from '../button/Button';
import axios from 'axios';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectServerContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsslice';

import { createContact } from 'redux/operations';

import {
  localStorageGetStatus,
  localStorageAdd,
} from 'js/locallibrary/locallibrary';

import { axiosData } from 'js/apireset/axios-data';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const serverContacts = useSelector(selectServerContacts);
  const localStorageLibraryName = 'contacts';

  const handleAddContact = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;
    const id = nanoid();
    if (name !== '' && serverContacts.find(contact => contact.name === name)) {
      Notiflix.Notify.info('Contact allready exists');
      return;
    }
    if (name === '' || number === '') {
      Notiflix.Notify.warning('Please input missing data');
      return;
    }
    const regexName = new RegExp("^[a-zA-Za]+(([' -][a-zA-Za])?[a-zA-Za]*)*$");
    const regexNumberPattern =
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const regexNumber = new RegExp(regexNumberPattern);
    if (!regexName.test(name) || !regexNumber.test(number)) {
      Notiflix.Notify.failure('Correct inputed data');
      return;
    }
    dispatch(createContact({ name: name, number: number }));
    evt.target.reset();
  };

  const handleApi = async evt => {
    console.log('get user current');

    const tokenregister =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ0YjNmN2U0NDIyZjAwMTQ5YjE3NWMiLCJpYXQiOjE2OTE2NjEzMDN9.FHKP0AhRxi8n1mzAKlltTGKkVgoTQkz5RQRnn2Ki8_g';

    const tokenlogin =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ0YjNmN2U0NDIyZjAwMTQ5YjE3NWMiLCJpYXQiOjE2OTE2ODc5MDN9.pId5UvuPe1u8BM2yc3acqO1dhZ601nx0D9wxdxXEo2w';

    const header1 = {
      method: 'post',
      accept: 'application/json',
      baseURL: 'https://connections-api.herokuapp.com/users/signup',
    };

    const header2 = {
      method: 'post',
      accept: 'application/json',
      baseURL: 'https://connections-api.herokuapp.com/users/login',
    };

    const header3 = {
      method: 'get',
      accept: 'application/json',
      baseURL: 'https://connections-api.herokuapp.com/',
      url: '/users/current',
      headers: { Authorization: `Bearer ${tokenlogin}` },
    };

    const header4 = {
      method: 'post',
      accept: 'application/json',
      baseURL: 'https://connections-api.herokuapp.com/',
      url: '/users/logout',
      headers: { Authorization: `Bearer ${tokenlogin}` },
    };

    axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
    // axios.defaults.headers.common.Authorization = `Bearer ${tokenlogin}`;

    const auth1 = {
      name: 'Testas Crosese',
      email: 'testoftest@test.pl',
      password: 'examplepwd123452312313123123',
    };

    const auth2 = {
      email: 'testoftest@test.pl',
      password: 'examplepwd123452312313123123',
    };

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

  // const handleAddContact = evt => {
  //   evt.preventDefault();
  //   const name = evt.target.elements.name.value;
  //   const number = evt.target.elements.number.value;
  //   const id = nanoid();
  //   if (name !== '' && contacts.find(contact => contact.name === name)) {
  //     Notiflix.Notify.info('Contact allready exists');
  //     return;
  //   }
  //   if (name === '' || number === '') {
  //     Notiflix.Notify.warning('Please input missing data');
  //     return;
  //   }
  //   const regexName = new RegExp("^[a-zA-Za]+(([' -][a-zA-Za])?[a-zA-Za]*)*$");
  //   const regexNumberPattern =
  //     /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  //   const regexNumber = new RegExp(regexNumberPattern);
  //   if (!regexName.test(name) || !regexNumber.test(number)) {
  //     Notiflix.Notify.failure('Correct inputed data');
  //     return;
  //   }
  //   Notiflix.Notify.success('Adding new contact');
  //   const element = localStorageGetStatus(
  //     localStorageLibraryName,
  //     name,
  //     'name'
  //   ); //  libraryName, element, keySearch
  //   if (element !== undefined) {
  //     Notiflix.Notify.info('Contact allready exists in localstorage');
  //     //resolve: remove contact, add contact with new id?
  //   } else {
  //     localStorageAdd(localStorageLibraryName, {
  //       id: id,
  //       name: name,
  //       number: number,
  //     }); //libraryName, object
  //   }
  //   dispatch(addContact({ id: id, name: name, number: number }));
  //   evt.target.reset();
  // };

  return (
    <form
      name="contactform"
      autoComplete="on"
      method="POST"
      validate="true"
      onSubmit={handleAddContact}
    >
      <label className={css.inputlabel}>
        Name
        <input
          className={css.inputfield}
          type="text"
          name="name"
          minLength="2"
          maxLength="50"
          autoComplete="name"
          placeholder=" "
          pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.inputlabel}>
        Number
        <input
          className={css.inputfield}
          type="tel"
          name="number"
          autoComplete="tel"
          placeholder=" "
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button label="Add contact" formButton={true} />
      <Button label="Api" formButton={false} action={handleApi} />
    </form>
  );
};

// action={addContact}
// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
