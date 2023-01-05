import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function Main() {
  let text = "Sending infos";

  const [background, setBackground] = useState('yellow')

  const changeBackground = () => {
    setBackground(background === 'yellow' ? 'blue' : 'yellow')
  }

  return (
    <Context.Provider value={{ text, background, changeBackground }}>
      <Layer1 />
    </Context.Provider>
  );
}

function Layer1() {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "500px",
        height: "500px",
        display: "inline-block",
      }}
    >
      <Layer2 />
    </div>
  );
}

function Layer2() {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "400px",
        height: "400px",
        margin: "50px",
        display: "inline-block",
      }}
    >
      <Layer3 />
    </div>
  );
}

function Layer3() {
  const { text, background, changeBackground } = useContext(Context);

  return (
    <div
      style={{
        backgroundColor: background,
        width: "300px",
        height: "300px",
        margin: "50px",
      }}
    >
      <p>{text}</p>
      <button onClick={changeBackground}>Change color</button>
    </div>
  );
}

export default Main;
