import { useState, useCallback, useMemo, useEffect } from "react";
import "./App.css";
import List from "./List";

export const WithCallback = () => {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const getItems = useCallback(() => {
    console.log("fire");
    return [input + 10, input + 100];
  }, [input]);

  // const getItems = () => {
  //   console.log("fire");
  //   return [input + 10, input + 100];
  // };

  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white",
  };

  return (
    <>
      <h2>useCallback</h2>
      <div style={theme}>
        <input
          type="number"
          value={input}
          onChange={(event) => setInput(parseInt(event.target.value))}
        />

        {/* on click the button the theme is set to the 
          opposite mode, light to dark and vice versa*/}
        <button onClick={() => setLight((prevLight) => !prevLight)}>
          {light ? "dark mode" : "light mode"}
        </button>
        <List getItems={getItems} />
        <p>
          Without useCallback, every time you change theme, you'll fetch the
          whole list. If you've components loaded, the way of loading these
          components must be with useCallback.
        </p>
      </div>
    </>
  );
};

export const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  //const result = useCallback(() => computeExpensiveValue(count), [count]);
  // useCallback does not work because you want to memorize result, not the function itself.
  //const result = computeExpensiveValue(count);
  const result = useMemo(() => computeExpensiveValue(count), [count]);

  // This component re-renders on every count change,
  // causing the expensive function to run again
  return (
    <div>
      <h2>useMemo</h2>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment expensive Count
      </button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Increment Render Count
      </button>
      <p>
        Without useMemo, every time you click to increment Render Count, you'll
        recalculate expensive count too. To keep recalculated value, useMemo is
        the hook.
      </p>
    </div>
  );
};

export function WithEffect() {
  /* Some data */
  const data = {
    Colors: ["red", "green", "yellow"],
    Fruits: ["Apple", "mango", "Banana"],
  };

  /* Initial states */
  const [currentChoice, setCurrentChoice] = useState("Colors");
  const [items, setItems] = useState([]);

  /* Using useEffect to set the data of currentchoice
     to items and console log the fetching... */
  useEffect(() => {
    setItems(data[currentChoice]);
    console.log("Data is fetched!");
  }, [currentChoice]);

  return (
    <>
      <h2>useEffect</h2>

      <button onClick={() => setCurrentChoice("Colors")}>Colors</button>
      <button onClick={() => setCurrentChoice("Fruits")}>Fruits</button>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
      <p>
        Every time you want to change state of the app, in this case changing
        from Colors to Fruits, this must be handle by useEffect.
      </p>
    </>
  );
}
