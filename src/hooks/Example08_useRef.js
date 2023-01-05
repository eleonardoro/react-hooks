import React, { useRef } from "react";

function Example08_useRef() {
  const element = useRef();

  const action = () => {
    element.current.focus();
    element.current.style.backgroundColor = "red";
    element.current.value = "Type something..."
  };

  return (
    <div>
      <input type="text" ref={element} />
      <input type="button" value="Click here" onClick={action} />
    </div>
  );
}

export default Example08_useRef;
