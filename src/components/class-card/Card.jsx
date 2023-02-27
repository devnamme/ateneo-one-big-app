import React, { useState } from 'react';
import './Card.css';
import edit_img from './img/material-symbols_edit-outline.png';
import del_img from './img/uil_trash-alt.png';

const Card = () => {
  const [isToggled, setIsToggled] = useState(false);
  const imageDiv = `card-image ${isToggled ? '' : 'hidden'}`
  const [height, setHeight] = useState("80px");
  
  const toggle = () => {
    setIsToggled(!isToggled);
    setHeight(isToggled ? "80px" : "362px");
  }

  return (
    <div className='card' style={{ height: height}}>
      <div className='card-header' onClick={toggle}>
        <div className='card-label'>
          <h4 className='label'>CSCI 42</h4>
        </div>
        <div className={imageDiv}>
          <img id='delete' src={del_img} alt='material-symbols_edit-outline' />
        </div>
        <div className='card-image'>
          <img id='edit' src={edit_img} alt='material-symbols_edit-outline' />
        </div>
      </div>
      {isToggled && (
        <div className='card-content'>
          <div className='color-container'>
            <div id='lavender'>
            </div>
            <div id='blue'>
            </div>
            <div id='red'>
            </div>
            <div id='yellow'>
            </div>
            <div id='green'>
            </div>
            <div id='pink'>
            </div>
          </div>
          <div className='card-info'>
          </div>
          <div className='btns'>
          </div> 
        </div>   
      )}
    </div>
  )
}

export default Card