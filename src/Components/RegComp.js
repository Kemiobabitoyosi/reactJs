import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Reg Comp render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp

// A regular component does not implement the shouldComponentUpdate method. It always retuens true by default