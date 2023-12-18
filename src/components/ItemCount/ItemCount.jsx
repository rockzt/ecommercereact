import { useState } from "react";
import Button from "../Button/Button.jsx";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    } else {
      alert(`Only ${stock} on stock`);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      alert("Cannot add less than 1");
    }
  };
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Add: {count}</h4>
      <Button callback={decrement} label={"-"} />
      <Button callback={onAdd} label={"Add to Cart"} />
      <Button callback={increment} label={"+"} />
    </div>
  );
};

export default ItemCount;
