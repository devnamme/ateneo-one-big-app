import React from 'react'
import './Timeslot.css'
import del_img from './img/uil_trash-alt.png';

const Timeslot = (props) => {
  return (
    <div className='timeslot'>
        <p id='day'>{props.day}</p>
        <p id='time'>{props.time}</p>
        <p id='room'>{props.room}</p>
        <img id='del' src={del_img} alt='material-symbols_edit-outline'/>
    </div>
  )
}

export default Timeslot