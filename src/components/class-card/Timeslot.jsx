import React from 'react'
import './Timeslot.css'
import del_img from './img/uil-trash-alt.svg';

const Timeslot = (props) => {
  return (
    <div className='timeslot'>
        <p className='day'>{props.day}</p>
        <p className='time'>{props.time}</p>
        <p className='room'>{props.room}</p>
        <img className='del' src={del_img} alt='material-symbols_edit-outline'/>
    </div>
  )
}

export default Timeslot