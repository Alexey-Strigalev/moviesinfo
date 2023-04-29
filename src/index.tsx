import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store from 'store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
