import {
  useState,
  useEffect,
  useContext,
} from 'react'
import {
  Link,
  Navigate,
  useParams
} from 'react-router-dom'
import * as Auth from './../../context/Auth'
import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore'

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
  let { schedule_id } = useParams()
  const user = useContext(Auth.Context)

  const [shouldError, setShouldError] = useState(false)
  const [schedule, setSchedule] = useState({})
  const [classes, setClasses] = useState([])

  const onAddClass = () => {
    addDoc(collection(Auth.db, 'users', user.uid, 'schedules', schedule_id, 'classes'), {
      code: `TBA-${classes.length}`,
      color: 'lavender',
      professor: 'TBA',
      timeslots: [{
        day: 1,
        loc: 'TBA',
        start: 0,
        end: 0,
      }],
    })
  }

  const onPasteFromAISIS = () => {
    console.log('paste from aisis')
  }

  const deleteClass = (id) => {
    deleteDoc(doc(Auth.db, 'users', user.uid, 'schedules', schedule_id, 'classes', id))
  }

  useEffect(() => {
    if (!user || !user.uid) return

    onSnapshot(doc(Auth.db, 'users', user.uid, 'schedules', schedule_id), (snapshot) => {
      if (!snapshot.exists())
        setShouldError(true)
      else
        setSchedule(snapshot.data())
    })

    onSnapshot(collection(Auth.db, 'users', user.uid, 'schedules', schedule_id, 'classes'), (snapshot) => {
      let temp_classes = []
      snapshot.docs.forEach((doc) => {
        temp_classes.push({ ...doc.data(), class_id: doc.id })
      })
      setClasses([...temp_classes])
    })
  }, [user])

  if (shouldError)
    return (<Navigate to='/error' />)

  return (
    <div id="schedule-creator-container" className="main-wrapper">
      <div className="schedules-content">
        <div id="creator-text">
          <Link id="return" to="/schedules">Back to all schedules</Link>
          <h3 id="schedule-name">{schedule.name ? schedule.name : ''}</h3>
          <p id="subtitle">{schedule.sy ? `SY ${schedule.sy}-${schedule.sy + 1},` : ''} {schedule.sem ? sem_name[schedule.sem] : ''}</p>
        </div>

        <div className="schedule-content">
          <IconTextButton text="Add Class" icon="add" width="400" onclick={onAddClass} />
          <IconTextButton text="Paste from AISIS" icon="clipboard" width="400" onclick={onPasteFromAISIS} />

          {classes.map((c, i) =>
            <ClassCard
              key={`class-${c.class_id}`}
              schedule_id={schedule_id}
              class_id={c.class_id}
              onDelete={() => deleteClass(c.class_id)}
            />
          )}
        </div>
        <Button text="Delete Schedule" isFilled={true} size="large" color="#FF2323"/>
      </div>

      <Timetable classes={classes} />
    </div>
  )
}

export default SchedulePage