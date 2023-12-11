import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
// import PurComp from "./PurComp";
// import RegComp from "./RegComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Toyosi",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Toyosi",
      });
    });
  }

  render() {
    console.log("***************Parent Component remder***************");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}/>
        <PurComp name={this.state.name}/> */}
      </div>
    );
  }
}

export default ParentComp;

// PureComponenthelps with performance boost by not rerendering when it is unecessary. However do not mutate object or arrats in props or state else it would not rerender in this state
// It is probably safer to use regular components most of the time unless you are having performance lag/hit most of the time
