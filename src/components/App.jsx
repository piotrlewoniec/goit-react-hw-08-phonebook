import React from 'react';
import { useEffect } from 'react';
import css from './App.module.css';
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { Loader } from './loader/Loader';
import { localStorageLoad } from '../js/system/localstorage';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectServerData } from 'redux/selectors';
import { addContact } from 'redux/contactsslice';
import { getContacts } from 'redux/operations';

export const App = () => {
  const localStorageLibraryName = 'contacts';
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { data, isLoading, error } = useSelector(selectServerData);

  useEffect(() => {
    // if (localStorageLibraryName in localStorage) {
    //   const libraryLocal = localStorageLoad(localStorageLibraryName);
    //   for (let element of libraryLocal) {
    //     dispatch(addContact(element));
    //   }

    // }
    dispatch(getContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(contacts);
  // }, [contacts]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className={css.app_holder}>
      <h1 className={css.app_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.app_subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader name="RotatingLines" />}
      {error && <p>Communication error. {error}</p>}
    </div>
  );
};

// Komponenty:
// logowanie
// rejestracja
// konto uzytkownika
// Nawigacja

// Strony:
// Glowna

// Książka kontaktów
// Dodaj w aplikacji "Książka kontaktów" możliwość rejestracji, logowania i aktualizacji użytkownika, a także pracy z prywatnym zbiorem kontaktów.

// Back-end
// Do tego zadania istnieje gotowy back-end. Zapoznaj się z dokumentacją. Wspiera wszystkie niezbędne operacje z listy kontaktów oraz rejestrację, logowanie i aktualizację użytkownika przy pomocy JWT. Wykorzystaj go zamiast twojego back-endu utworzonego przez serwis mockapi.io.
// https://connections-api.herokuapp.com/docs/

// Trasowanie
// Dodaj trasowanie z biblioteką React Router. W aplikacji powinno być kilka stron:

// /register - publiczna trasa rejestracji nowego użytkownika z formularzem
// /login - publiczna trasa logowania istniejącego użytkownika z formularzem
// /contacts - prywatna trasa do pracy z listą kontaktów użytkownika
// Dodaj komponent nawigacji Navigation z odnośnikami do przechodzenia po trasach.

// Menu użytkownika
// Utwórz komponent UserMenu, wyświetlający pocztę użytkownika i przycisk wyjścia z konta. Jego układ może wyglądać następująco:

// <div>
//   <p>mango@mail.com</p>
//   <button>Logout</button>
// </div>

// Stylizacja
// To finalna wersja aplikacji, dlatego popracuj nad szatą graficzną interfejsu. Można wykorzystać bibliotekę stylizacji lub komponentów, na przykład Chakra UI lub Material UI.
// https://chakra-ui.com/
// https://mui.com/

//----------------------------------------------------------------------------------

// Książka kontaktów
// Dodaj w aplikacji "Książka kontaktów" możliwość rejestracji, logowania i aktualizacji użytkownika, a także pracy z prywatnym zbiorem kontaktów.

// Back-end
// Do tego zadania istnieje gotowy back-end. Zapoznaj się z dokumentacją. Wspiera wszystkie niezbędne operacje z listy kontaktów oraz rejestrację, logowanie i aktualizację użytkownika przy pomocy JWT. Wykorzystaj go zamiast twojego back-endu utworzonego przez serwis mockapi.io.
// https://connections-api.herokuapp.com/docs/

// Trasowanie
// Dodaj trasowanie z biblioteką React Router. W aplikacji powinno być kilka stron:

// /register - publiczna trasa rejestracji nowego użytkownika z formularzem
// /login - publiczna trasa logowania istniejącego użytkownika z formularzem
// /contacts - prywatna trasa do pracy z listą kontaktów użytkownika
// Dodaj komponent nawigacji Navigation z odnośnikami do przechodzenia po trasach.

// Menu użytkownika
// Utwórz komponent UserMenu, wyświetlający pocztę użytkownika i przycisk wyjścia z konta. Jego układ może wyglądać następująco:

// <div>
//   <p>mango@mail.com</p>
//   <button>Logout</button>
// </div>

// Stylizacja
// To finalna wersja aplikacji, dlatego popracuj nad szatą graficzną interfejsu. Można wykorzystać bibliotekę stylizacji lub komponentów, na przykład Chakra UI lub Material UI.
// https://chakra-ui.com/
// https://mui.com/

// Książka telefoniczna
// Wykonaj refaktor kodu aplikacji "Książka telefoniczna". Usuń kod odpowiadający za przechowywanie i czytanie kontaktów z lokalnego magazynu i dodaj pracę z backendem do zapisywania kontaktów.

// Stwórz backend dla projektu przy pomocy serwisu UI mockapi.io. Zarejestruj się, wykorzystując swoje konto na GitHub.
// https://mockapi.io/
// Stwórz zasób contacts, aby otrzymać endpoint /contacts. Wykorzystaj konstruktor zasobów i opisz obiekt kontaktu jak na ilustracji.

// Wykorzystaj funkcję createAsyncThunk do współpracy z backendem i asynchronicznymi zapytaniami.

// https://redux-toolkit.js.org/api/createAsyncThunk

// Książka telefoniczna
// Przeprowadź refaktor kodu aplikacji "Książka telefoniczna", dodając zarządzanie stanem przy pomocy biblioteki Redux Toolkit.

// Niech stan Redux wygląda następująco.

// {
//   contacts: [],
//   filter: ""
// }

// Stwórz magazyn z configureStore().
// Stwórz działanie zapisywania i usuwania kontaktu oraz odświeżania filtru. Wykorzystaj funkcję createAction().
// Stwórz reduktory kontaktów i filtru. Wykorzystaj funkcję createReducer() lub createSlice().
// Powiąż komponent React i logikę Redux przy pomocy hooków biblioteki react-redux.

// Książka kontaktów
// Utworzone zostało repozytorium goit-react-hw-04-phonebook.
// Przeprowadź refaktor kodu zadania «Książka kontaktów», wykorzystując hooki React.

// 1 - Książka kontaktów
// Weź swoje rozwiązanie zadania z poprzedniej pracy domowej i dodaj przechowywanie kontaktów książki telefonicznej w localStorage. Wykorzystaj metody cyklu życiowego.

// Przy dodaniu i usunięciu kontaktu, zapisują się one w lokalnym magazynie.
// Przy ładowaniu aplikacji, kontakty, jeżeli są, sczytują się z lokalnego magazynu i zapisują w stanie.

// 2 - Książka kontaktów
// Napisz aplikację do przechowywania kontaktów książki telefonicznej.

// Krok 1
// Aplikacja powinna składać się z formularza i listy kontaktów. W obecnym kroku zrealizuj dodanie nazw kontaktu i wyświetlanie listy kontaktów. Aplikacja nie powinna przechowywać kontaktów między różnymi sesjami (odświeżenie strony).

// Wykorzystaj następujący układ input z wbudowaną walidacją dla nazwy kontaktu.

// <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />

// Stan zapisany w komponencie rodzicu <App> obowiązkowo powinien wyglądać następująco, nie można dodawać nowych właściwości.

// state = {
//   contacts: [],
//   name: ''
// }

// Każdy kontakt powinien być obiektem z właściwościami name i id. Do generowania identyfikatorów wykorzystaj dowolny pasujący pakiet, na przykład nanoid. Po tym kroku aplikacja powinna wyglądać mniej więcej tak:

// https://www.npmjs.com/package/nanoid

// Krok 2
// Rozszerz funkcjonalność aplikacji, pozwalając użytkownikom dodawać numery telefonów. W tym celu dodaj do formularza <input type="tel"> oraz właściwość dla zapisywania jego wartości w stanie.

// state = {
//   contacts: [],
//   name: '',
//   number: ''
// }

// Wykorzystaj ten układ input z wbudowaną walidacją dla numeru kontaktu.

// <input
//   type="tel"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />

// Po tym kroku aplikacja powinna wyglądać mniej więcej tak:

// Krok 3
// Dodaj pole wyszukiwania, które można wykorzystać do filtrowania listy kontaktów po nazwie.

// Pole wyszukiwania to input bez formularza, którego wartość zapisuje się w stanie (kontrolowany element).
// Logika filtrowania powinna ignorować wielkość liter.

// state = {
//   contacts: [],
//   filter: '',
//   name: '',
//   number: ''
// }

// Gdy pracujemy nad nową funkcjonalnością, wygodnie jest na stałe zakodować niektóre dane w stanie. Uchroni to od ręcznego wprowadzania danych w interfejsie dla testowania pracy nowej funkcjonalności. Można na przykład wykorzystać taki stan początkowy.

// state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
// }

// Krok 4
// Jeżeli twoja aplikacja realizowana jest w jednym komponencie <App>, wykonaj refaktor, dzieląc pasujące części na oddzielne komponenty. W stanie komponentu root <App> zostaną tylko właściwości contacts i filter.

// state = {
//   contacts: [],
//   filter: ''
// }

// Wystarczy wydzielić cztery komponenty: formularz dodania kontaktów, listę kontaktów, element listy kontaktów i filtr wyszukiwania.

// Po refaktorze komponent root aplikacji będzie wyglądał następująco:

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>

// Krok 5
// Usuń użytkownikowi możliwość dodawania kontaktów, których nazwy są już w książce telefonicznej. W wypadku takiej próby pokaż alert z ostrzeżeniem.

// Krok 6
// Rozszerz funkcjonalność aplikacji, pozwalając użytkownikowi na usuwanie zapisanych wcześniej kontaktów.
