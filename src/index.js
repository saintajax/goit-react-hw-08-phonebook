import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
