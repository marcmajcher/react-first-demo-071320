import React, { Component } from "react";

export default class User extends Component {
  render() {
    const {id, avatar, first_name, last_name, email } = this.props.user;

    return <div className="user-card">
      <img src={avatar} alt={id} />
      <p>Name: {first_name} {last_name}</p>
      <p>Email: {email}</p>
      </div>
  }
}