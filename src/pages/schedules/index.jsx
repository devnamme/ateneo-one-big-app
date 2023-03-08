import './Schedules.css'
import IconTextButton from '../../components/icon-text-button'
import ScheduleCard from '../../components/schedule-card'
import Timetable from '../../components/timetable/index'

import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getFirestore, collection, addDoc } from 'firebase/firestore'
import * as Auth from './../../context/Auth'

const db = getFirestore(Auth.FirebaseApp)

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

function SchedulesPage() {
  const user = useContext(Auth.Context)

  const [activeSched, setActiveSched] = useState(0)
  const [schedules, setClasses] = useState([
    {
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
              stime: 1100,
              etime: 1230,
              loc: 'F-204',
            }
          ]
        }
      ]
    }, {
      id: 2,
      name: 'My Schedule 2',
      sy: 2022,
      sem: 2,
      classes: [
        {
          code: 'CSCI 42',
          color: 'lavender',
          professor: 'JEFFREY JONGKO',
          timeslots: [
            {
              stime: 1100,
              etime: 1230,
              loc: 'F-204',
            }
          ]
        }
      ]
    },
  ])
  
  return (
    <div id="schedules-wrapper">
      <div id="schedules-container">
        <div className="schedules-content">
          <IconTextButton text="Add New Schedule" icon="add" />
          <Link to="/schedule/enlistment">
            <IconTextButton text="Enlistment Scheduler" icon="schedule"/>
          </Link>

          {schedules.map((schedule, i) =>
            <ScheduleCard
              key={'schedule-' + i}
              schedule={schedule}
              active={activeSched == i}
              onClick={() => setActiveSched(i)}
            />
          )}
        </div>

        <Timetable />
      </div>
    </div>
  )
}
export default SchedulesPage