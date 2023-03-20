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
    setIsToggled(!isToggled);
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

  return (
    <div className='card'>
      <div className='card-header'>
        <h4 className='label'>{code}</h4>
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
            <p className='content-text'><span className='heavy'>Professor: </span>{professor}</p>
            <p className='heavy content-text'>Timeslots</p>
            {timeslots.map((timeslot, index) => (
              <div className='timeslot' key={`timeslot-${index}`}>
                <p className='day'>{day_name[timeslot.day]}</p>
                <p className='time'>{`${timeslot.start} - ${timeslot.end}`}</p>
                <p className='room'>{timeslot.loc}</p>
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
