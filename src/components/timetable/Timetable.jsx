import React, {useState} from 'react';
import Timeblock from './Timeblock.jsx';
import './Timetable.css';

const Timetable = (props) => {

    // For testing purposes, handles the forms
    const [state, setState] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(values => ({...values, [name]: value}))
    };

    // Testing code ends here

    // Dunno if there's a more efficient way of doing this instead of having one for each day
    const [timeBlockMonday, addTimeBlockMonday] = useState([]);
    const [timeBlockTuesday, addTimeBlockTuesday] = useState([]);
    const [timeBlockWednesday, addTimeBlockWednesday] = useState([]);
    const [timeBlockThursday, addTimeBlockThursday] = useState([]);
    const [timeBlockFriday, addTimeBlockFriday] = useState([]);
    const [timeBlockSaturday, addTimeBlockSaturday] = useState([]);


    const timeBlockHandler = (event) => {
        // Test code
        event.preventDefault();
        const day = state.day;

        if( day == 'Monday') {
            addTimeBlockMonday([...timeBlockMonday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }

        if( day == 'Tuesday') {
            addTimeBlockTuesday([...timeBlockTuesday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }

        if( day == 'Wednesday') {
            addTimeBlockWednesday([...timeBlockWednesday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }

        if( day == 'Thursday') {
            addTimeBlockThursday([...timeBlockThursday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }

        if( day == 'Friday') {
            addTimeBlockFriday([...timeBlockFriday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }

        if( day == 'Saturday') {
            addTimeBlockSaturday([...timeBlockSaturday, 
            <Timeblock 
                subject={state.subject} 
                teacher={state.teacher}
                classroom={state.classroom}
                startTime={state.startTime}
                endTime={state.endTime}
                day={state.day}
                color={state.color}
                duration={state.duration}/>])
        }
    }

    return (
        <div>
            <div class='timetable'>
                <div class='timeColumn'>
                    <p>6 AM</p>
                    <p>7 AM</p>
                    <p>8 AM</p>
                    <p>9 AM</p>
                    <p>10 AM</p>
                    <p>11 AM</p>
                    <p>12 AM</p>
                    <p>1 PM</p>
                    <p>2 PM</p>
                    <p>3 PM</p>
                    <p>4 PM</p>
                    <p>5 PM</p>
                    <p>6 PM</p>
                    <p>7 PM</p>
                    <p>8 PM</p>
                </div>
                <div class='dayColumn'>
                    <h1>M</h1>
                    {timeBlockMonday}
                </div>
                <div class='dayColumn'>
                    <h1>T</h1>
                    {timeBlockTuesday}
                </div>
                <div class='dayColumn'>
                    <h1>W</h1>
                    {timeBlockWednesday}
                </div>
                <div class='dayColumn'>
                    <h1>Th</h1>
                    {timeBlockThursday}
                </div>
                <div class='dayColumn'>
                    <h1>F</h1>
                    {timeBlockFriday}
                </div>
                <div class='dayColumn'>
                    <h1>S</h1>
                    {timeBlockSaturday}
                </div>
            </div>

            {/* Buttons for testing the addTimeBlock 
                Notes: Don't forget to add functionality for conflicting Timeblocks*/}
            <form>
                <p>Subject:</p>
                <input name='subject' value={state.subject} type="text" onChange={handleChange}></input>
                <p>Teacher:</p>
                <input name='teacher' value={state.teacher} type="text" onChange={handleChange}></input>
                <p>Classroom:</p>
                <input name='classroom' value={state.classroom} type="text" onChange={handleChange}></input>
                <p>Start Time:</p>
                <input name='startTime' value={state.startTime} type="text" onChange={handleChange}></input>
                <p>End Time:</p>
                <input name='endTime' value={state.endTime} type="text" onChange={handleChange}></input>
                <p>Day:</p>
                <input name='day' value={state.day} type="text" onChange={handleChange}></input>
                <p>Color:</p>
                <input name='color' value={state.color} type="text" onChange={handleChange}></input>
                <p>duration:</p>
                <input name='duration' value={state.duration} type="text" onChange={handleChange}></input>
                <button onClick={timeBlockHandler}> Add Timeblock</button>
            </form>
        </div>

    );
};

export default Timetable;
