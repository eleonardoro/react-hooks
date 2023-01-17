import React, { useState, useEffect, useCallback } from "react";

function Example11_useCallback() {
  const [color, setColor] = useState("blue");
  const [number, setNumber] = useState(0);

  const changeColor = () => {
    setColor(color === "blue" ? "gray" : "blue");
  };

  const listNumbers = useCallback(() => {
    return [number - 1, number, number + 1];
  }, [number]);

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={changeColor}>Change Color</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <ListNumberComponent list={listNumbers} />
    </div>
  );
}

function ListNumberComponent({ list }) {
  const [vector, setVector] = useState([]);

  useEffect(() => {
    console.log("Component created!");
    setVector(list);
  }, [list]);

  return (
    <ul>
      {vector.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}

export default Example11_useCallback;
