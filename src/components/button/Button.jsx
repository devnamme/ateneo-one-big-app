import React from "react";
import "./Button.css";

const Button = ({ text, isFilled, size, color }) => {
  const fillType = isFilled ? "filled" : "hollow";
  const sizeType = size === "regular" ? "regular" : "large";

  return (
    <button className={`button ${fillType} ${sizeType} ${color}`}>
      {text}
    </button>
  );
};

export default Button;
