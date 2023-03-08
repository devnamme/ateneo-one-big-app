import React from 'react';
import './IconTextButton.css';

const IconTextButton = (props) => {
  const clickHandler = () => {
    console.log(props.text + ' clicked.');
  }

  return (
    <button className="icon-text-btn" onClick = {clickHandler} style={ props.width ? {maxWidth: `${props.width}px`} : {}}>
      <img className='icon' src={`/src/assets/icons/${props.icon}.svg`} />
      <p> {props.text} </p>
    </button>
  );
};

export default IconTextButton;
