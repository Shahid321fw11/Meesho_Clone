import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider from './Context/searchContext';
import './Components/Pages/Navbar.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

