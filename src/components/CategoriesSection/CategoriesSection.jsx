// Categories.js

import React from "react";
import styles from "./CategoriesSection.module.css";

const CategoriesSection = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Main Section</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={styles.categoryItem}
            data-category={category.name}
            onClick={() => {
              console.log(`Click on category ${category.id}`);
            }}
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className={styles.categoryImage}
            />
            <span className={styles.categoryName}>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSection;
