import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Kryteria przyjęcia
// Wykorzystaj ten szablon projektu React jako punkt początkowy swojego projektu.
// https://github.com/goitacademy/react-homework-template#readme
// Utworzone repozytorium goit-react-hw-08-phonebook
// W oddawanej pracy domowej są odnośniki do: plików źródłowych i strony roboczej każdego projektu na GitHub Pages
// W trakcie uruchamiania kodu zadania, na konsoli nie ma błędów i ostrzeżeń
// Dla każdego komponentu istnieje oddzielny folder z plikiem komponentu React i plikiem stylów
// Komponenty mają opisane propTypes
