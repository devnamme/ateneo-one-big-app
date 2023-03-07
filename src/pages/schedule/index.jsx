import { useState } from 'react'

import { Link } from 'react-router-dom'

import './Schedule.css'

import IconTextButton from '../../components/icon-text-button'
import Button from '../../components/button'
import Timetable from '../../components/timetable'
import ClassCard from './../../components/class-card'

const sem_name = [
  'Intersession',
  'First Semester',
  'Second Semester',
]

function SchedulePage() {
  const [schedule, setSchedule] = useState({
    id: 1,
    name: 'My Schedule 1',
    sy: 2022,
    sem: 1,
    classes: [
      {
        code: 'CSCI 42',
        color: 'lavender',
        professor: 'JEFFREY JONGKO',
        timeslots: [
          {
            day: 1,
            stime: 1100,
            etime: 1230,
            loc: 'F-204',
          }, {
            day: 4,
            stime: 1100,
            etime: 1230,
            loc: 'F-204',
          }
        ]
      }
    ]
  })

  return (
    <div className="main-wrapper" id="creator-container">
      <div class="creator-content">
        <div id="creator-text">
          <Link id="return" to="/schedules">Back to all schedules</Link>
          <h3 id="schedule-name">{schedule.name}</h3>
          <p id="subtitle">SY {schedule.sy}-{schedule.sy + 1}, {sem_name[schedule.sem]}</p>
        </div>

        <div class="schedule-content">
          <IconTextButton text="Add Class" icon="add" width="400" />
          <IconTextButton text="Paste from AISIS" icon="clipboard" width="400" />

          {schedule.classes.map((c, i) =>
            <ClassCard
              key={'class-' + i}
              class={c}
            />
          )}
        </div>
        <Button text="Delete Schedule" isFilled={true} size="large" color="#FF2323"/>
      </div>

      <Timetable/>
    </div>
  )
}

export default SchedulePage