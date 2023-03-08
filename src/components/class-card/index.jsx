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
  onSnapshot,
} from 'firebase/firestore'
import edit_img from './img/material-symbols_edit-outline.svg';
import del_img from './img/uil-trash-alt.svg';
import Timeslot from './Timeslot';
import Button from '../button'
import ColorBlock from './ColorBlock'

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
      const data = snapshot.data()
      setCode(data.code)
      setColor(data.color)
      setProfessor(data.professor)
    })

    onSnapshot(collection(Auth.db, 'users', user.uid, 'schedules', props.schedule_id, 'classes', props.class_id, 'timeslots'), (snapshot) => {
      let temp_timeslots = []
      snapshot.docs.forEach((doc) => {
        temp_timeslots.push({ ...doc.data(), timeslot_id: doc.id })
      })
      setTimeslots(temp_timeslots)
    })
  }, [user])

  const handleColorClick = (newColor) => {
    setColor(newColor);
  };

  const toggle = () => {
    setIsToggled(!isToggled);
  }

  const addTimeslot = () => {
    setTimeslots([...timeslots, {
      day: 1,
      loc: '',
      start: 0,
      end: 0,
    }])
  };

  const deleteCard = () => {
    console.log('deleted!');
  }

  const pasteAISIS = () => {
    console.log("btnclicked!");
  }
  return (
    <div className='card'>
      <div className='card-header'>
        <h4 className='label'>{code}</h4>
        <div className={`card-image ${isToggled ? '' : 'hidden'}`} id='delete'>
          <img src={del_img} alt='material-symbols_edit-outline' onClick={deleteCard} />
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
            <p className='content-text'><span className='heavy'>Professor: </span>{professor}</p>
            <p className='heavy content-text'>Timeslots</p>
            {timeslots.map((timeslot, index) => (
              <Timeslot
                key={`timeslot-${index}`}
                day={day_name[timeslot.day]}
                time={`${timeslot.start}-${timeslot.end}`}
                room={timeslot.loc}
              />
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
