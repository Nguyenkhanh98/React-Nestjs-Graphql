import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import Message from './components/common/message';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './configs/graphql';
// const store = configureStore();

ReactDOM.render(
  <Provider store={configureStore}>
    <ApolloProvider client={apolloClient}>
      <App />
      <Message />
    </ApolloProvider>
  </Provider>

  ,
  document.getElementById('vietjet-data-root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
