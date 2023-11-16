import { useState } from "react";

const ItemCount = ({ initValue, incrementBy }) => {
  const [count, setCount] = useState(initValue);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    /*Set count does not finish until this function is completed*/
    /*Getting the previous state of the variable and adding + 1*/
    setCount((prev) => prev + 1);
    /*
        setCount((prev) => prev + 1 )
        setCount((prev) => prev + 1 )
         */
  };

  const reset = () => {
    setCount(initValue);
  };

  const empty = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={empty}>Empty</button>
    </div>
  );
};

export default ItemCount;
