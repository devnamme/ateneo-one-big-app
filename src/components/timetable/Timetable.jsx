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
        <div>
            <div class='timetable'>
                <div class='time-column'>
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
                <div class='day-column'>
                    <h1>M</h1>
                    <div class='day-schedule'>
                    {timeBlockMonday}
                    </div>
                </div>
                <div class='day-column'>
                    <h1>T</h1>
                    <div class='day-schedule'>
                    {timeBlockTuesday}
                    </div>
                </div>
                <div class='day-column'>
                    <h1>W</h1>
                    <div class='day-schedule'>
                    {timeBlockWednesday}
                    </div>
                </div>
                <div class='day-column'>
                    <h1>Th</h1>
                    <div class='day-schedule'>
                    {timeBlockThursday}
                    </div>
                </div>
                <div class='day-column'>
                    <h1>F</h1>
                    <div class='day-schedule'>
                    {timeBlockFriday}
                    </div>
                </div>
                <div class='day-column'>
                    <h1>S</h1>
                    <div class='day-schedule'>
                        {timeBlockSaturday}
                    </div>
                </div>
            </div>

            {/* Buttons for testing the addTimeBlock 
                Notes: Don't forget to add functionality for conflicting and overlapping Timeblocks maybe*/}
            <form>
                <p>Subject:</p>
                <input name='subject' value={state.subject} type="text" onChange={handleChange} placeholder="CSCI 41"></input>
                <p>Teacher:</p>
                <input name='teacher' value={state.teacher} type="text" onChange={handleChange}></input>
                <p>Classroom:</p>
                <input name='classroom' value={state.classroom} type="text" onChange={handleChange}></input>
                <p>Start Time:</p>
                <select name='startTime' value={state.startTime} defaultValue="6:00 AM" onChange={handleChange}>
                    <option value='6:00 AM'>6:00 AM</option>
                    <option value='6:30 AM'>6:30 AM</option>
                    <option value='7:00 AM'>7:00 AM</option>
                    <option value='7:30 AM'>7:30 AM</option>
                    <option value='8:00 AM'>8:00 AM</option>
                    <option value='8:30 AM'>8:30 AM</option>
                    <option value='9:00 AM'>9:00 AM</option>
                    <option value='9:30 AM'>9:30 AM</option>
                    <option value='10:00 AM'>10:00 AM</option>
                    <option value='10:30 AM'>10:30 AM</option>
                    <option value='11:00 AM'>11:00 AM</option>
                    <option value='11:30 AM'>11:30 AM</option>
                    <option value='12:00 PM'>12:00 PM</option>
                    <option value='12:30 PM'>12:30 PM</option>
                    <option value='1:00 PM'>1:00 PM</option>
                    <option value='1:30 PM'>1:30 PM</option>
                    <option value='2:00 PM'>2:00 PM</option>
                    <option value='2:30 PM'>2:30 PM</option>
                    <option value='3:00 PM'>3:00 PM</option>
                    <option value='3:30 PM'>3:30 PM</option>
                    <option value='4:00 PM'>4:00 PM</option>
                    <option value='4:30 PM'>4:30 PM</option>
                    <option value='5:00 PM'>5:00 PM</option>
                    <option value='5:30 PM'>5:30 PM</option>
                    <option value='6:00 PM'>6:00 PM</option>
                    <option value='6:30 PM'>6:30 PM</option>
                    <option value='7:00 PM'>7:00 PM</option>
                    <option value='7:30 PM'>7:30 PM</option>
                </select>
                <p>End Time:</p>
                <select name='endTime' value={state.endTime}  defaultValue="6:30 AM" onChange={handleChange}>
                    <option value='6:00 AM'>6:00 AM</option>
                    <option value='6:30 AM'>6:30 AM</option>
                    <option value='7:00 AM'>7:00 AM</option>
                    <option value='7:30 AM'>7:30 AM</option>
                    <option value='8:00 AM'>8:00 AM</option>
                    <option value='8:30 AM'>8:30 AM</option>
                    <option value='9:00 AM'>9:00 AM</option>
                    <option value='9:30 AM'>9:30 AM</option>
                    <option value='10:00 AM'>10:00 AM</option>
                    <option value='10:30 AM'>10:30 AM</option>
                    <option value='11:00 AM'>11:00 AM</option>
                    <option value='11:30 AM'>11:30 AM</option>
                    <option value='12:00 PM'>12:00 PM</option>
                    <option value='12:30 PM'>12:30 PM</option>
                    <option value='1:00 PM'>1:00 PM</option>
                    <option value='1:30 PM'>1:30 PM</option>
                    <option value='2:00 PM'>2:00 PM</option>
                    <option value='2:30 PM'>2:30 PM</option>
                    <option value='3:00 PM'>3:00 PM</option>
                    <option value='3:30 PM'>3:30 PM</option>
                    <option value='4:00 PM'>4:00 PM</option>
                    <option value='4:30 PM'>4:30 PM</option>
                    <option value='5:00 PM'>5:00 PM</option>
                    <option value='5:30 PM'>5:30 PM</option>
                    <option value='6:00 PM'>6:00 PM</option>
                    <option value='6:30 PM'>6:30 PM</option>
                    <option value='7:00 PM'>7:00 PM</option>
                    <option value='7:30 PM'>7:30 PM</option>
                    <option value='8:00 PM'>8:00 PM</option>
                </select>
                <p>Day:</p>
                <select name='day' value={state.day}  defaultValue="Monday" onChange={handleChange}>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                </select>
                <p>Color:</p>
                <select name='color' value={state.color} defaultValue="lavender" onChange={handleChange}>
                    <option value='lavender'>Lavender</option>
                    <option value='skyblue'>Skyblue</option>
                    <option value='red'>Red</option>
                    <option value='yellow'>Yellow</option>
                    <option value='green'>Green</option>
                    <option value='pink'>Pink</option>
                </select>
                <p>duration:</p>
                <select name='duration' value={state.duration} defaultValue="30" onChange={handleChange}>
                    <option value='30'>30min</option>
                    <option value='60'>1hr</option>
                    <option value='90'>1hr30min</option>
                    <option value='120'>2hr</option>
                    <option value='150'>2hr30min</option>
                    <option value='180'>3hr</option>
                </select>
                <button onClick={timeBlockHandler}> Add Timeblock</button>
            </form>
        </div>

    );
};

export default Timetable;
