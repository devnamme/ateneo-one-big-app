import React from 'react';
import './Timetable.css';

const Timeblock = (props) => {
   
    return (
        <div className={`timeblock ${props.color} _${props.duration} _${props.startTime}`}>
            <p className='start-time'>{props.startTime}</p>
            <div className='class-info'>
                <p>{props.subject}</p>
                <p>{props.teacher}</p>
                <p>{props.classroom}</p>
            </div>
            <p className='end-time'>{props.endTime}</p>
        </div>
    );
};

Timeblock.defaultProps = {
    subject: 'CSCI 42',
    teacher: 'Jongko',
    classroom: 'F-204',
    startTime: '8:00 PM',
    endTime: '3:30 PM',
    color: 'lavender',
    duration: '90'
}

export default Timeblock;
