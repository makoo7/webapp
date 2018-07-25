import React, { Component } from 'react';

// components
import StudentList from './components/StudentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Student List</h1>
        <StudentList />
      </div>
    );
  }
}

export default App;
