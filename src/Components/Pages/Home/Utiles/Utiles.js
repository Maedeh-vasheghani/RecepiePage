import React from "react";
import "../Home.css";

export default function Utiles({ title, details }) {
  return (
    <>
      <div className="utiles-container">
        <h2 className="utiles-title">{title}</h2>
        <div className="utiles-items">
          <img
            src="./Images/ustensiles.jpeg"
            className="ustensiles-img"
            alt="img"
          />
          <ol className="utiles-list">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
