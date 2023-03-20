import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import * as Auth from './../../context/Auth'
import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore'
import edit_img from './img/material-symbols_edit-outline.svg';
import del_img from './img/uil-trash-alt.svg';
import Button from '../button'
import ColorBlock from './ColorBlock'


import './Timeslot.css'
import './ClassCard.css';

const day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const color_names = ['lavender', 'blue', 'red', 'yellow', 'green', 'pink']

const Card = (props) => {
  const user = useContext(Auth.Context)

  const [isToggled, setIsToggled] = useState(false);
  const [code, setCode] = useState('')
  const [color, setColor] = useState('lavender')
  const [professor, setProfessor] = useState('')
  const [timeslots, setTimeslots] = useState([])

  useEffect(() => {
    if (!user || !user.uid) return

    onSnapshot(doc(Auth.db, 'users', user.uid, 'schedules', props.schedule_id, 'classes', props.class_id), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data()
        setCode(data.code)
        setColor(data.color)
        setProfessor(data.professor)
        setTimeslots(data.timeslots)
      }
    })
  }, [user])

  const handleColorClick = (newColor) => {
    setColor(newColor);
  };

  const toggle = () => {
    setIsToggled((prev) => {
      if (prev) {
        console.log('save')

        updateDoc(doc(Auth.db, 'users', user.uid, 'schedules', props.schedule_id, 'classes', props.class_id), {
          code: code,
          color: color,
          professor: professor,
          timeslots: timeslots,
        })
      }

      return !prev
    });
  }

  const addTimeslot = () => {
    setTimeslots([...timeslots, {
      day: 1,
      loc: 'TBA',
      start: 0,
      end: 0,
    }])
  };

  const deleteTimeslot = (index) => {
    let temp = timeslots;
    temp.splice(index, 1)
    setTimeslots([...temp])
  }

  const pasteAISIS = () => {
    console.log("btnclicked!");
  }

  const changeTimeslotValue = (index, key, value) => {
    let temp = timeslots
    temp[index][key] = value
    setTimeslots([...timeslots])
  }

  return (
    <div className='card'>
      <div className='card-header'>
        { isToggled
          ? <input className="label" type="text" value={code} onChange={() => setCode(event.target.value)} />
          : <h4 className='label'>{code}</h4>
        }
        <div className={`card-image ${isToggled ? '' : 'hidden'}`} id='delete'>
          <img src={del_img} alt='material-symbols_edit-outline' onClick={() => props.onDelete()} />
        </div>
        <div className='card-image' id='edit'>
          <img src={edit_img} alt='material-symbols_edit-outline' onClick={toggle}/>
        </div>
      </div>
      {isToggled && (
        <div className='card-content'>
          <div className='color-container'>
            { color_names.map((c) =>
              <ColorBlock
                key={`color-block-${c}`}
                color={c}
                selected={color == c}
                onclick={() => handleColorClick(c)}
              />
            )}
          </div>
          <div className='card-info'>
            <p className='content-text'>
              <span className='heavy'>Professor: </span>
              <input type="text" value={professor} onChange={() => setProfessor(event.target.value)} />
            </p>
            <p className='heavy content-text'>Timeslots</p>
            {timeslots.map((timeslot, index) => (
              <div className='timeslot' key={`timeslot-${index}`}>
                <select className='day' value={timeslot.day} onChange={() => changeTimeslotValue(index, 'day', parseInt(event.target.value))}>
                  <option value="0">Sun</option>
                  <option value="1">Mon</option>
                  <option value="2">Tue</option>
                  <option value="3">Wed</option>
                  <option value="4">Thu</option>
                  <option value="5">Fri</option>
                  <option value="6">Sat</option>
                </select>

                <div className="time">
                  <input
                    type="time"
                    value={`${Math.floor(timeslot.start / 100).toString().padStart(2, "0")}:${(timeslot.start % 100).toString().padStart(2, "0")}`}
                    onChange={() => changeTimeslotValue(index, 'start', parseInt(event.target.value.split(":")[0]) * 100 + parseInt(event.target.value.split(":")[1]))}
                  /> - <input
                    type="time"
                    value={`${Math.floor(timeslot.end / 100).toString().padStart(2, "0")}:${(timeslot.end % 100).toString().padStart(2, "0")}`}
                    onChange={() => changeTimeslotValue(index, 'end', parseInt(event.target.value.split(":")[0]) * 100 + parseInt(event.target.value.split(":")[1]))}
                  />
                </div>

                <input className='room' value={timeslot.loc} onChange={() => changeTimeslotValue(index, 'loc', event.target.value)} />

                <img className='del' src={del_img} alt='material-symbols_edit-outline' onClick={() => deleteTimeslot(index)}/>
              </div>
            ))}
          </div>
          <div className='btns'>
            <Button text='Add Timeslot' isFilled={false} size="regular" color="#0084F7" onClickEvent={() => addTimeslot('MON','11:00 AM to 12:00 PM', 'CTC 212')} />
            <Button text='Paste from AISIS' isFilled={false} size="regular" color="#0084F7" onClickEvent={pasteAISIS}  />
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
