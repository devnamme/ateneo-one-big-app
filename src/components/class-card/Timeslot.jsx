import React from 'react'
import './Timeslot.css'
import del_img from './img/uil_trash-alt.svg';

const Timeslot = ({ day, time, room }) => {
  return (
    <div className='timeslot'>
        <p id='day'>{day}</p>
        <p id='time'>{time}</p>
        <p id='room'>{room}</p>
        <img id='del' src={del_img} alt='material-symbols_edit-outline'/>
    </div>
  )
}

export default Timeslot