import React from "react";
import "./Button.css";

const Button = ({ text, isFilled, size, color }) => {
  const fillType = isFilled ? "filled" : "hollow";
  const sizeType = size === "regular" ? "regular" : "large";
  const style = { "--color": color };

  return (
    <button className={`button ${fillType} ${sizeType}`} style={style}>{text}</button>
  );
};

export default Button;
