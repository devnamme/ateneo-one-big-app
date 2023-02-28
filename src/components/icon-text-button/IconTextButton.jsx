import React from 'react';
import './IconTextButton.css';

const IconTextButton = (props) => {

    const clickHandler = () => {
        if (props.id == 'delete') {
            alert("Delete");
        }

        if (props.id == 'copy') {
            alert("Copy");
        }
        
    }   

    return (
        <button
            id={props.id}
            onClick = {clickHandler}
        >   
        <img class='icon' src={`/${props.id}.svg`} />
            {props.id == 'delete' &&
            <p> Delete Group </p>
            }
    
            {props.id == 'copy' &&
            <p> Copy from AISIS </p>
            }
        </button>
  );
};

IconTextButton.defaultProps = {
    id: 'delete',
}

export default IconTextButton;

