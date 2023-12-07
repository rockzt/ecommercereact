import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../ItemListContainer/asyncMock.js";
import Button from "../Button/Button.jsx";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((response) => {
      setProduct(response);
    });
  }, [productId]);
  return (
    <div className={styles.productDescription}>
      <img
        src={product?.img}
        alt={product?.productName}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{product?.productName}</h2>
        <p className={styles.category}>Category: {product?.category}</p>
        <p className={styles.quantity}>Quantity: {product?.qty}</p>
        <p className={styles.sku}>SKU: {product?.sku}</p>
      </div>
      <Button
        label={"Add to cart"}
        callback={() => {
          console.log(`Product ID: ${productId} added to cart`);
        }}
      />
    </div>
  );
};
export default ItemDetailContainer;
