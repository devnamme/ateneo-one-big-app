import { Link } from 'react-router-dom'

import React from 'react';
import './ScheduleButton.css'

const sem_name = [
  'Intersession',
  'First Semester',
  'Second Semester',
]

const ScheduleCard = (props) => {
  return (
    <button className={props.active ? "schedule-button active" : "schedule-button"} onClick={props.onclick}>
      <div className="schedule-text">
        <div className="schedule-name">
          <h4>{props.schedule.name}</h4>
        </div>
        <div className="schedule-subtitle">
          <span>SY {props.schedule.sy}-{props.schedule.sy + 1}, {sem_name[props.schedule.sem]}</span>
        </div>
      </div>
      <Link className="edit-icon" to={`/schedule/${props.schedule.id}`}>
        <img className="edit" src="/src/assets/icons/edit.svg"/>
      </Link>
    </button>
  )
}

export default ScheduleCard