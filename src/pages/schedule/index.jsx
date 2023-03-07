import './Schedule.css'
import Header from '../../components/header/index'
import IconTextButton from '../../components/icon-text-button/index'
import Button from '../../components/button/button'

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
              <h1>CLASS CARD</h1>
            </div>
            <div className="delete-sched">
              <Button text="Delete Schedule" isFilled={true} size="regular" color="#FF2323"/>
            </div>
          </div>
        </div>
        <div class="creator-content">
          <h1>TIMETABLE</h1>
        </div>
      </div>
  )
}

export default SchedulePage