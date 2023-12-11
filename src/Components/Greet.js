import React from "react";

// function Greet () {
//     return <h1>Hello Vishwas</h1>
// }

// Destructuring in Function Parameter

// const Greet = ({name, heroName}) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>;
//             {/* <p>{props.children}</p> */}
//         </div>
//     )
// }

// Destructuring in  Function Body

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      ;{/* <p>{props.children}</p> */}
    </div>
  );
};

export default Greet;
