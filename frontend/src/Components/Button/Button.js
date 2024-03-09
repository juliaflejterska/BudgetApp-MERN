import React from "react";
import styles from "./Button.module.css";

function Button({ name, icon, onClick, color }) {
  return (
    <button
      className={styles.button}
      style={{ background: color }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
