import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increament() {
    // this.setState ({
    //    count: this.state.count + 1
    // },
    // () => {
    //     console.log('Callback value', this.state.count)
    // }
    // )

    // Always make use of setState and never modify the state directly
    // Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
    // When you have to update state based on the previous state Value, pass in a function as an argument instead of regular Object.

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increamentFive()}>Increament</button>
      </div>
    );
  }
}

export default Counter;
