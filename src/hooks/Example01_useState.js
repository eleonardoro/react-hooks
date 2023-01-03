import React, { useState } from "react";

function Example01_useState() {
  const [text, setText] = useState("Hello World!");

  const event = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={event} />
      <p>{text}</p>
    </div>
  );
}

export default Example01_useState;
