import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(window.localStorage.getItem("item") || 0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dart") : setTheme("light")
        }
      >
        Toggle Theme
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
