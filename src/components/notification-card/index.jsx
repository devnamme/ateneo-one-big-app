import './NotificationCard.css'
import closeIcon from './../../assets/close.svg'
import { useState } from 'react'

function NotificationCard(props) {
  const [active, setActive] = useState(true)

  function close() {
    setActive(false)
  }

  return (
    <div className={active ? "notification-card active" : "notification-card"}>
      <p className="text">{props.text}</p>
      <img src={closeIcon} className="close" onClick={close} />
    </div>
  )
}

export default NotificationCard