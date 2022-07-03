import { ApolloProvider } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { client } from './lib/apollo';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
