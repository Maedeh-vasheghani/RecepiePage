import React from "react";
import "../Home.css";

export default function Preparation({ title, details }) {
  return (
    <>
      <div className="preparation-section">
        <h3 className="titlerecette">{title} </h3>
        <ul className="preparatin-list">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
