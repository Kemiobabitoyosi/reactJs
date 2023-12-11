import React, { PureComponent } from 'react'


class PurComp extends PureComponent {
  render() {
    console.log("Pur Comp render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PurComp

// A pure conponent implememts shouldComponentUpdate with a shallow props and state compariaon
// It implememts shouldCompionentUpdate with a shallow prop and state comparison
// SC === Shallow Comparison
// SC of prevState with currentState and prevProps with currentProps and onlt=y rerenders when there is a diffence
