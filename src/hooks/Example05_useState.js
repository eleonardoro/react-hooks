import React, { useState, useEffect } from "react";

function Example05_useState() {
  const [text, setText] = useState("Hello World!");

  useEffect(() => {
    setInterval(() => {
      setText("useEffect executed");
    }, 2000);
  });

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Example05_useState;
