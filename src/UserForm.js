import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      avatar: '',
    };
  }

  updateState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendFormData = (event) => {
    event.preventDefault();
    this.props.addUser({...this.state, id: Math.random()});
    this.setState({ first_name: '', last_name: '', email: '', avatar: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendFormData}>
          <div>
            First Name:{' '}
            <input
              name="first_name"
              value={this.state.first_name}
              onChange={this.updateState}
            />
          </div>
          <div>
            Last Name:{' '}
            <input
              name="last_name"
              value={this.state.last_name}
              onChange={this.updateState}
            />
          </div>
          <div>
            Email:{' '}
            <input
              name="email"
              value={this.state.email}
              onChange={this.updateState}
            />
          </div>
          <div>
            Image URL:{' '}
            <input
              name="avatar"
              value={this.state.avatar}
              onChange={this.updateState}
            />
          </div>
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}
