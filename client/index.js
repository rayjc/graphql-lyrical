import './style/style.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './components/App';



const client = new ApolloClient({
  uri: 'http://localhost/graphql',
  // Note: no need to set TypePolicy or dataIdFromObject since
  // Apollo uses id as key by default; just remember to include id
  // in response
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
