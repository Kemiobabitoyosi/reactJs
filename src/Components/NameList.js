import React from "react";
// import Person from "./Person";

// function NameList() {
//   const person = [
//     {
//       id: 1,
//       name: "Dami",
//       age: 30,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "Olamide",
//       age: 30,
//       skill: "React",
//     },

//     {
//       id: 3,
//       name: "Precious",
//       age: 30,
//       skill: "React",
//     },
//   ];

  // Mapping through simple arrays
  // const names = ['Dami', 'Olamide', 'Precious']
  // const nameList = names.map((name) => <h2>{name}</h2>);

  // Mapping through array objects recommended way
  // N.B: Key props are not accessible in the child element
//   const nameList = person.map((person) => (
//     <Person key={person.id} person={person} />
//   ));

//   return <div>{nameList}</div>;
// }

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

 
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
