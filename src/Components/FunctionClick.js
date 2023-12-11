import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("buttn clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;

// In JavaScript it is very much possible to define a function in another function
