import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.scss';
import App from './App';
import store from '../store';

const rootElement = document.getElementById('app');

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), rootElement);
