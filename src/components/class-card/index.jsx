import React, { useState } from 'react';
import './Card.css';
import edit_img from './img/material-symbols_edit-outline.svg';
import del_img from './img/uil-trash-alt.svg';
import check from './img/check.svg';
import Timeslot from './Timeslot';
import Button from '../button'

const day_name = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

const Card = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const imageDiv = `card-image ${isToggled ? '' : 'hidden'}`
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const toggle = () => {
    setIsToggled(!isToggled);
    setSelectedColor(null);
  }

  const addTimeslot = (day, time, room) => {
  };

  const deleteCard = () => {
    console.log('deleted!');
  }

  const pasteAISIS = () => {
    console.log("btnclicked!");
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-label'>
          <h4 className='label'>{props.class.code}</h4>
        </div>
        <div className={imageDiv} id='delete'>
          <img src={del_img} alt='material-symbols_edit-outline' onClick={deleteCard} />
        </div>
        <div className='card-image' id='edit'>
          <img src={edit_img} alt='material-symbols_edit-outline' onClick={toggle}/>
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
           {selectedColor && document.getElementById(selectedColor) && (
            <div className='selection' style={{bottom: `${document.getElementById(selectedColor).offsetTop}px`, left: `${document.getElementById(selectedColor).offsetLeft}px`}}>
              <div className='black-rectangle'>
                <img id="check" src={check} alt="check" />
              </div>
            </div>
          )}
          </div>
          <div className='card-info'>
            <p className='content-text'><span className='heavy'>Professor: </span>{props.class.professor}</p>
            <p className='heavy content-text'>Timeslots</p>
            {props.class.timeslots.map((timeslot, index) => (
              <Timeslot
                key={index}
                day={day_name[timeslot.day]}
                time={`${timeslot.stime}-${timeslot.etime}`}
                room={timeslot.loc}
              />
            ))}
          </div>
          <div className='btns'>
            <Button text='Add Timeslot' isFilled={false} size="regular" color="#0084F7" onClickEvent={() => addTimeslot('MON','11:00 AM to 12:00 PM', 'CTC 212')} />
            <Button text='Paste from AISIS' isFilled={false} size="regular" color="#0084F7" onClickEvent={pasteAISIS}  />
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
