import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// components
import StandardList from './components/StandardList';

// apollo integration.
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql?',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Standard List</h1>
          <StandardList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
