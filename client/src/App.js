import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// components
import StandardList from './components/StandardList';
import AddStudent from './components/AddStudent';
import LoginForm from './components/LoginForm';

// apollo integration.
const client = new ApolloClient({
    uri:'http://localhost:4000/graphql?',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/* <LoginForm /> */}
          <StandardList />
          <AddStudent />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
