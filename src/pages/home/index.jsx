import './Home.css'
import Header from '../../components/header/index';
import NotificationCard from '../../components/notification-card';
import Timetable from '../../components/timetable'

function HomePage() {
  return (
    <>
      <Header />
      <NotificationCard text="Hello there!" />
      <Timetable />
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage