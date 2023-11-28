import styles from "../Item/Item.module.css";
import Button from "../Button/Button.jsx";
import React from "react";

const Item = ({ productName, category, qty, sku, img }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{productName}</h2>
      <br />
      <img src={img} alt={productName} />
      <br />
      <br />
      <p className={styles.cardSubtitle}>{category}</p>
      <p className={styles.cardText}>
        <b>Qty:</b>
        {qty}
      </p>
      <Button
        label={"Add To Cart"}
        color={"blue"}
        callback={() => console.log(`Adding product ${sku}`)}
      />
      <p>
        <small>SKU: {sku}</small>
      </p>
    </div>
  );
};
export default Item;