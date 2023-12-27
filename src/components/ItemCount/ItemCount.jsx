import { useState, useContext } from "react";
import Button from "../Button/Button.jsx";
import { useNotification } from "../../notification/NotificationService.jsx";
// Importing Context referenced
import { Context } from "../../App.jsx";

const ItemCount = ({
  initial = 1,
  stock,
  productName,
  sku,
  qty,
  productId,
}) => {
  stock = qty;
  const [count, setCount] = useState(initial);
  const { showNotification } = useNotification();
  const [quantity, setQuantity] = useState(0);
  const { addItem, isInCart } = useContext(Context);

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
      showNotification("success", `Amount added ${count}`);
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

  const handleOnAdd = (count) => {
    const objProductToAdd = {
      productId,
      productName,
      sku,
      stock,
      count,
    };
    addItem(objProductToAdd);
    setQuantity(count);
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Add: {count}</h4>

      <Button callback={decrement} label={"-"} />
      {!isInCart(productId) ? (
        <Button
          callback={() => {
            handleOnAdd(count);
          }}
          label={"Add"}
        />
      ) : (
        <Button
          callback={() => {
            console.log("Paying");
          }}
          label={"PAY"}
        />
      )}
      <Button callback={increment} label={"+"} />
    </div>
  );
};

export default ItemCount;
