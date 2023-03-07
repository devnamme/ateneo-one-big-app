import React, {useState} from 'react';
import Timeblock from './Timeblock.jsx';
import './Timetable.css';

const Timetable = (props) => {

    // Dunno if there's a more efficient way of doing this instead of having one array for each day
    const [timeBlockMonday, addTimeBlockMonday] = useState([]);
    const [timeBlockTuesday, addTimeBlockTuesday] = useState([]);
    const [timeBlockWednesday, addTimeBlockWednesday] = useState([]);
    const [timeBlockThursday, addTimeBlockThursday] = useState([]);
    const [timeBlockFriday, addTimeBlockFriday] = useState([]);
    const [timeBlockSaturday, addTimeBlockSaturday] = useState([]);


    const timeBlockHandler = (event) => {
        // Test code
        event.preventDefault();

        if( state.day == 'Monday') {
            addTimeBlockMonday([...timeBlockMonday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }

        if( state.day == 'Tuesday') {
            addTimeBlockTuesday([...timeBlockTuesday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }

        if( state.day == 'Wednesday') {
            addTimeBlockWednesday([...timeBlockWednesday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }

        if( state.day == 'Thursday') {
            addTimeBlockThursday([...timeBlockThursday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }

        if( state.day == 'Friday') {
            addTimeBlockFriday([...timeBlockFriday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }

        if( state.day == 'Saturday') {
            addTimeBlockSaturday([...timeBlockSaturday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                color={state.color}
                duration={state.duration}/>])
        }
    }

    return (
      <div className='timetable'>
        <div className='time-column'>
          <p>6 AM</p>
          <p>7 AM</p>
          <p>8 AM</p>
          <p>9 AM</p>
          <p>10 AM</p>
          <p>11 AM</p>
          <p>12 PM</p>
          <p>1 PM</p>
          <p>2 PM</p>
          <p>3 PM</p>
          <p>4 PM</p>
          <p>5 PM</p>
          <p>6 PM</p>
          <p>7 PM</p>
          <p>8 PM</p>
        </div>
        <div className='day-column'>
          <h1>M</h1>
          <div className='day-schedule'>
            {timeBlockMonday}
          </div>
        </div>
        <div className='day-column'>
          <h1>T</h1>
          <div className='day-schedule'>
            {timeBlockTuesday}
          </div>
        </div>
        <div className='day-column'>
          <h1>W</h1>
          <div className='day-schedule'>
            {timeBlockWednesday}
          </div>
        </div>
        <div className='day-column'>
          <h1>Th</h1>
          <div className='day-schedule'>
            {timeBlockThursday}
          </div>
        </div>
        <div className='day-column'>
          <h1>F</h1>
          <div className='day-schedule'>
            {timeBlockFriday}
          </div>
        </div>
        <div className='day-column'>
          <h1>S</h1>
          <div className='day-schedule'>
            {timeBlockSaturday}
          </div>
        </div>
      </div>
    );
};

export default Timetable;
