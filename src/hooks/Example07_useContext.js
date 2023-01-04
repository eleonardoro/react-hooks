import React from "react";

function Main() {
  let text = "Sending infos";

  return (
    <div>
      <h1></h1>
      <Layer1 text={text} />
    </div>
  );
}

function Layer1({ text }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "500px",
        height: "500px",
        display: "inline-block",
      }}
    >
      <Layer2 text={text} />
    </div>
  );
}

function Layer2({ text }) {
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
      <Layer3 text={text} />
    </div>
  );
}

function Layer3({ text }) {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "300px",
        height: "300px",
        margin: "50px",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default Main;
