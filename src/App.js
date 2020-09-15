import React, { Component } from 'react';
import './App.css';
import data from './data';
import UserList from './UserList';
import UserForm from './UserForm';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data,
    };
  }

  addUser = (user) => {
    this.setState({ data: [user, ...data] });
  };

  render() {
    return (
      <div>
        <h1>Add a new user:</h1>
        <UserForm addUser={this.addUser}></UserForm>
        <h1>Here is our list of users:</h1>
        <UserList data={this.state.data}></UserList>
      </div>
    );
  }
}
