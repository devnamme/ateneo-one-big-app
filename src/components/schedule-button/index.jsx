import React from 'react';
import './ScheduleButton.css'
import { useState } from 'react'

const ScheduleButton = (props) => {
  const [active, setActive] = useState(false)

  const select = () => {
    setActive(!active)
    props.selected = 'True';
  }

  const editable = () =>{
    alert('Edit button clicked.');
  }

  return (
    <button className={active ? "schedule-button active" : "schedule-button"} onClick={select}>
      <div className="schedule-text">
        <div className="schedule-name">
            <h4>{props.scheduleName}</h4>
        </div>
        <div className="schedule-subtitle">
            <span>{props.scheduleSubtitle}</span>
        </div>
      </div>
      <div className="edit-icon" onClick={editable}>
        <img class="edit" src="src/assets/icons/edit.svg"/>
      </div>
    </button>
    
  )
}

ScheduleButton.defaultProps = {
  scheduleName: 'My Schedule',
  scheduleSubtitle: 'SY 2022-2023, Second Semester',
  selected: 'False'
}

export default ScheduleButton