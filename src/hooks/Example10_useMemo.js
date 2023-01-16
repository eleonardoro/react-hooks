import React, { useMemo, useReducer, useState } from "react";

function Example10_useMemo() {
  const [counter, setCounter] = useState(0);
  const [names, setNames] = useState(["John", "Peter", "Henry", "Ronaldo"]);

  const renderlessList = useMemo(
    () => {
      return <ListNames1 list={names} />;
    },
    { names }
  );

  const addName =() =>{
    setNames([...names, 'newName'+counter]);    
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={(e) => {
          if ((counter + 1) % 3 === 0) {
            addName()
          }

          setCounter(counter + 1);
        }}
      >
        Increment
      </button>

      {renderlessList}

      <ListNames2 list={names} />
    </div>
  );
}

function ListNames1({ list }) {
  console.log("ListNames1 Component created");

  return (
    <ul>
      {list.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

function ListNames2({ list }) {
  console.log("ListNames2 Component created");

  return (
    <ul>
      {list.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default Example10_useMemo;
