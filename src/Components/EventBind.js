import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // 3rd approach
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // 1st and 2nd approach
  // clickHandler() {
  //   this.setState ({
  //       message: 'GoodBye'
  //   })
  // }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render method  but has performance implications*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* OR */}

        {/* Arrrow function approach in render method if your code doesn't involve nested approach parameters */}
        {/* <button onClick={() => {this.clickHandler()}}>Click</button> */}

        {/* OR */}

        {/* Binding in the constructor method (better than in the render method practice and suggested by React) */}
        {/* <button onClick = {this.clickHandler}>Click</button> */}

        {/* OR */}

        {/* Arrow function as a Class Property  and my simplest and better approache suggested by React. P.S MY FAVOURITE APPROACH*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
