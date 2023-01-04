import React, { useState, useEffect } from "react";

function Example06_useState() {
  const [vector, setVector] = useState([]);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const converter = await data.json();
    setVector(converter);
    setStatus("Loaded!");
  };

  return (
    <div>
      <h3>{status}</h3>
      <br />
      <br />
      <br />
      <ul>
        {vector.map((obj) => (
          <li>{obj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example06_useState;
