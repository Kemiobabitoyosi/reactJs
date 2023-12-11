import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component, useContext } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return <ComponentE />;
  }
}

export default ComponentC;

