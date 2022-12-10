import React from "react";
import styles from "./Ingrediant.module.css";

export default function Ingredient({ title, details }) {
  return (
    <>
      <div className={styles.ingredient_one}>
        <h3 className={styles.titleone}>{title}</h3>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
