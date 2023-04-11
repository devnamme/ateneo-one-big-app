import React from 'react';
import './Timetable.css';

const Timeblock = (props) => {

  function calcTop() {
    return `${(props.raw_data.rawh_s - props.minTime) / (props.maxTime - props.minTime) * 100}%`
  }

  function calcBottom() {
    return `${(props.maxTime - props.raw_data.rawh_e) / (props.maxTime - props.minTime) * 100}%`
  }
   
    return (
        <div
          className={`timeblock ${props.raw_data.color}`}
          style={{top: calcTop(), bottom: calcBottom()}}
        >
            <p className='start-time'>{props.raw_data.start}</p>
            <div className='class-info'>
                <p>{props.raw_data.code}</p>
                <p>{props.raw_data.professor}</p>
                <p>{props.raw_data.loc}</p>
            </div>
            <p className='end-time'>{props.raw_data.end}</p>
        </div>
    );
};

export default Timeblock;
