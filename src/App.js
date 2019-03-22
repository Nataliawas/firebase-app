import React, { Component } from 'react';
import UserForm from './UserForm'
import UserTable from './UserTable'


class App extends Component {


  render() {
    return (
      <div>
        <UserForm />
        <UserTable />
      </div>
    );
  }
}

export default App
