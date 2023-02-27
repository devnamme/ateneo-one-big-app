import React, { useState } from 'react';
import './Card.css';
import edit_img from './img/material-symbols_edit-outline.png';
import del_img from './img/uil_trash-alt.png';
import check from './img/check.png';

const Card = () => {
  const [isToggled, setIsToggled] = useState(false);
  const imageDiv = `card-image ${isToggled ? '' : 'hidden'}`
  const [height, setHeight] = useState("80px");
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  
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
            <div
              id='lavender'
              className={selectedColor === 'lavender' ? 'selected' : ''}
              onClick={() => handleColorClick('lavender')}
            />
            <div
              id='blue'
              className={selectedColor === 'blue' ? 'selected' : ''}
              onClick={() => handleColorClick('blue')}
            />
            <div
              id='red'
              className={selectedColor === 'red' ? 'selected' : ''}
              onClick={() => handleColorClick('red')}
            />
            <div
              id='yellow'
              className={selectedColor === 'yellow' ? 'selected' : ''}
              onClick={() => handleColorClick('yellow')}
            />
            <div
              id='green'
              className={selectedColor === 'green' ? 'selected' : ''}
              onClick={() => handleColorClick('green')}
            />
            <div
              id='pink'
              className={selectedColor === 'pink' ? 'selected' : ''}
              onClick={() => handleColorClick('pink')}
            />
           {selectedColor && (
            <div className='selection' style={{bottom: `${document.getElementById(selectedColor).offsetTop}px`, left: `${document.getElementById(selectedColor).offsetLeft}px`}}>
              <div className='black-rectangle'>
                <img id="check" src={check} alt="check" />
              </div>
            </div>
          )}
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