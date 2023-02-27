import React from 'react'
import './Timeslot.css'
import del_img from './img/uil_trash-alt.png';

const Timeslot = (props) => {
  return (
    <div className='timeslot'>
        <p id='day'>TUE</p>
        <p id='time'>11:00 AM to 12:00 PM</p>
        <p id='room'>F-204</p>
        <img id='del' src={del_img} alt='material-symbols_edit-outline'/>
    </div>
  )
}

export default Timeslot