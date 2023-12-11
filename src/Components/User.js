import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}

export default User;

// Render prop is a technique for sharing code between React components using a prop whose value is a function
