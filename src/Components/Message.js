import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
      button: "Subscribe",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  changeButton() {
    this.setState({
      button: "Back",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeButton();
            this.changeMessage();
          }}
        >
          {this.state.button}
        </button>
      </div>
    );
  }
}

export default Message;
