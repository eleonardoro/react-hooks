import React, { useState } from "react";

function Example02_useState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} placeholder='Insert Name'/>
      <input type="text" onChange={e => setAge(e.target.value)} placeholder='Insert Age'/>
      <br/>
      <br/>
      <br/>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default Example02_useState;
