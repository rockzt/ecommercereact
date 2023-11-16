import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  //Destructuring props, BEST PRACTICES PROGRAMMING
  const { callback, label } = props;

  return (
    <button onClick={callback} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
