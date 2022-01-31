import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize'
import App from './App';
import Providers from './Providers';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
