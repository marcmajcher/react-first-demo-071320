import React, { Component } from 'react';
import User from './User';

export default class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(user => <User key={user.id} user={user}></User>)}
      </div>
    );
  }
}
