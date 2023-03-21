import './Schedules.css'
import IconTextButton from '../../components/icon-text-button'
import ScheduleCard from '../../components/schedule-card'
import Timetable from '../../components/timetable/index'

import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  collection,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore'
import * as Auth from './../../context/Auth'

function SchedulesPage() {
  const user = useContext(Auth.Context)

  const [activeSched, setActiveSched] = useState(0)
  const [schedules, setSchedules] = useState([])

  function createUserSchedules() {
    console.log('creating user schedules...')
    setDoc(doc(Auth.db, 'users', user.uid), {
      'name': user.displayName,
      'active_schedule': 0,
    })
  }

  useEffect(() => {
    if (!user || !user.uid) return

    onSnapshot(doc(Auth.db, 'users', user.uid), (snapshot) => {
      if (!snapshot.exists())
        createUserSchedules()
      else {
        console.log('new snapshot at', Date.now())

        const data = snapshot.data()
        setActiveSched(data.active_schedule)
      }
    })

    onSnapshot(collection(Auth.db, 'users' , user.uid, 'schedules'), (snapshot) => {
      let temp_scheds = []
      snapshot.docs.forEach((doc) => temp_scheds.push({ ...doc.data(), id: doc.id }))

      setSchedules(temp_scheds)
    })
  }, [user])

  function local_setActiveSched(sched_num) {
    setActiveSched(sched_num)
    updateDoc(doc(Auth.db, 'users', user.uid), { 'active_schedule': sched_num })
      .catch((err) => console.log(err))
  }

  return (
    <div id="schedules-container" className="main-wrapper">
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
            onclick={() => local_setActiveSched(i)}
          />
        )}
      </div>

      <Timetable />
    </div>
  )
}
export default SchedulesPage