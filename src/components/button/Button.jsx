import React from "react";
import "./Button.css";

const Button = ({ text, isFilled, size }) => {
  const fillType = isFilled ? "filled" : "hollow";
  const sizeType = size === "regular" ? "regular" : "large";

  return (
    <button className={`button ${fillType} ${sizeType}`}>{text}</button>
  );
};

export default Button;
