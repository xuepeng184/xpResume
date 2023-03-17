import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
postMessage({ payload: 'removeLoading' }, '*');
