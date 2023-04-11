import React, {useEffect, useState} from 'react';
import Timeblock from './Timeblock.jsx';
import './Timetable.css';

const DAYS = ['M', 'T', 'W', 'Th', 'F', 'S'];

const Timetable = (props) => {

    const [minTime, setMinTime] = useState(0);
    const [maxTime, setMaxTime] = useState(0);
    const [times, setTimes] = useState([]);

    const [dayGroups, setDayGroups] = useState([
      {
        day: 'Su',
        classes: [],
      }, {
        day: 'M',
        classes: [],
      }, {
        day: 'T',
        classes: [],
      }, {
        day: 'W',
        classes: [],
      }, {
        day: 'Th',
        classes: [],
      }, {
        day: 'F',
        classes: [],
      }, {
        day: 'S',
        classes: [],
      },
    ])

    useEffect(() => {
      // console.log('classes', props.classes)

      let temp_dg = [
        {
          day: 'Su',
          classes: [],
        }, {
          day: 'M',
          classes: [],
        }, {
          day: 'T',
          classes: [],
        }, {
          day: 'W',
          classes: [],
        }, {
          day: 'Th',
          classes: [],
        }, {
          day: 'F',
          classes: [],
        }, {
          day: 'S',
          classes: [],
        },
      ]
      // { start, end, code, professor, loc}

      // add to each day group
      let nmint = minTime
      let nmaxt = maxTime

      props.classes.forEach(c => {
        c.timeslots.forEach(t => {
          if (t.start != 0 && t.end != 0) {

          let rawh_s = t.start / 100
          let rawh_e = t.end / 100

          let f_s = `${t.start >= 1300 ? Math.floor(rawh_s) - 12 : Math.floor(rawh_s)}:${(t.start % 100).toString().padStart(2, '0')} ${t.start < 1200 ? 'AM' : 'PM'}`
          let f_e = `${t.end >= 1300 ? Math.floor(rawh_e) - 12 : Math.floor(rawh_e)}:${(t.end % 100).toString().padStart(2, '0')} ${t.end < 1200 ? 'AM' : 'PM'}`

          let est_s = Math.floor(rawh_s)
          let est_e = Math.ceil(rawh_e)

          // console.log(est_s, est_e)

          if (nmint == 0 || est_s < nmint)
            nmint = est_s
          if (nmaxt == 0 || est_e > nmaxt)
            nmaxt = est_e

          temp_dg[t.day].classes.push({
            color: c.color,
            start: f_s,
            end: f_e,
            code: c.code,
            professor: c.professor,
            loc: t.loc,
            rawh_s: Math.floor(t.start / 100) + ((t.start % 100) / 60),
            rawh_e: Math.floor(t.end / 100) + ((t.end % 100) / 60),
          })

          }
        })
      })

      if (nmint != minTime) setMinTime(nmint)
      if (nmaxt != maxTime) setMaxTime(nmaxt)

      if (temp_dg[6].classes.length == 0)
        temp_dg.splice(6, 1)
      if (temp_dg[0].classes.length == 0)
        temp_dg.splice(0, 1)

      setDayGroups(temp_dg);
    }, [props.classes])

    useEffect(() => {
      let temp_times = []
      for (let i = minTime; i < maxTime; i++) 
        temp_times.push(i)

      setTimes(temp_times)
    }, [minTime, maxTime])


    return (
      <div className="timetable">
        <div className="time-column">
          <p></p>
          <div className="times">
            { times.map(t =>
              <p key={`time-${t}`}>
                {t <= 12 ? t : t - 12} {t <= 12 ? 'AM' : 'PM'}
              </p>
            ) }
          </div>
        </div>
        { dayGroups.map((dg, i) =>
          <div key={`day-${dg.day}`}>
            <p className="day">{dg.day}</p>
            <div className="blocks">
              { dg.classes.map(c =>
                <Timeblock raw_data={c} key={`block-${DAYS[i]}-${c.code}`} minTime={minTime} maxTime={maxTime} />
              ) }
            </div>
          </div>
        ) }
      </div>
    );
};

export default Timetable;
