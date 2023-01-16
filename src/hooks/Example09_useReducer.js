import React, { useReducer } from "react";

function Example09_useReducer() {
  const action = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      default:
        return 0;
    }
  };

  const [counter, executeAction] = useReducer(action, 0);

  return (
    <div>
      <h1> Counter value: {counter}</h1>

      <button onClick={(e) => executeAction("increment")}>Increment</button>
      <button onClick={(e) => executeAction("decrement")}>Decrement</button>
    </div>
  );
}

export default Example09_useReducer;
