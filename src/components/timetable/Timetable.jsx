import React from 'react';
import Timeslot from './Timeslot.jsx';
import './Timetable.css';

const Timetable = (props) => {

    const addTimeSlot = (props) => {

    }

    return (
        <div class='timetable'>
            <div class='timeColumn'>
                <p> </p>
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
                <p><b>M</b></p>
            </div>
            <div class='dayColumn'>
                <p><b>T</b></p>
            </div>
            <div class='dayColumn'>
                <p><b>W</b></p>
            </div>
            <div class='dayColumn'>
                <p><b>Th</b></p>
            </div>
            <div class='dayColumn'>
                <p><b>F</b></p>
            </div>
            <div class='dayColumn'>
                <p><b>S</b></p>
            </div>
        </div>

    );
};

export default Timetable;
