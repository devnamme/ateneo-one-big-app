import React, { useState } from 'react';
import './Card.css';
import edit_img from './img/material-symbols_edit-outline.png';
import del_img from './img/uil_trash-alt.png';

const Card = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const toggle = () => {{
    setIsToggled(!isToggled);
  }}

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-label' onClick={toggle}>
          <h4 className='label'>CSCI 42</h4>
        </div>
        <div className='card-images'>
          <img id='delete' src={del_img} alt='material-symbols_edit-outline' />
          <img id='edit' src={edit_img} alt='material-symbols_edit-outline' />
        </div>
      </div>
      {isToggled && (
        <div className='card-content'>
          Test
        </div>   
      )}
    </div>
  )
}

export default Card