import React from 'react';
import './IconTextButton.css';

const IconTextButton = (props) => {
  const clickHandler = () => {
    console.log(props.text + ' clicked.');
  }

  return (
    <button class="icon-text-btn" onClick = {clickHandler} style={ props.width ? {maxWidth: `${props.width}px`} : {}}>
      <img class='icon' src={`/src/assets/icons/${props.icon}.svg`} />
      <p> {props.text} </p>
    </button>
  );
};

export default IconTextButton;
