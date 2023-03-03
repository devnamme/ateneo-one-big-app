import React from 'react';
import './IconTextButton.css';

const IconTextButton = (props) => {

    const clickHandler = () => {
            alert(props.text + ' clicked.');
    }   

    return (
        <button class="icon-text-btn" onClick = {clickHandler}>   
            <img class='icon' src={`src/assets/icons/${props.icon}.svg`} />
            <p> {props.text} </p>
        </button>
  );
};

IconTextButton.defaultProps = {
    text: 'Add Schedule',
    icon: 'add'
}

export default IconTextButton;

