import './Schedule.css'
import Header from '../../components/header/index'
import IconTextButton from '../../components/icon-text-button/index'
import Button from '../../components/button/button'
import ClassCard from '../../components/class-card/card'
import Timetable from '../../components/timetable/index'

function SchedulePage() {
  return (
    <div id="creator-wrapper">
      <div className="Header">
          <Header/>
      </div>
      <div id="creator-container">
        <div class="creator-content">
            <div className="add-class">
              <IconTextButton text="Add Class"/>
            </div>
            <div className="paste-aisis">
              <IconTextButton text="Paste from AISIS" icon="clipboard"/>
            </div>
            <div className="card">
              <ClassCard/>
            </div>
            <div className="delete-sched">
              <Button text="Delete Schedule" isFilled={true} size="regular" color="#FF2323"/>
            </div>
          </div>
        </div>
        <div class="creator-content">
          <div className="schedule-timetable">
            <Timetable/>
          </div>
        </div>
      </div>
  )
}

export default SchedulePage