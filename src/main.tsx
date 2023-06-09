import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router></Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
postMessage({ payload: 'removeLoading' }, '*');
