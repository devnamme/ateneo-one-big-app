import './Home.css'
import Header from '../../components/header/index';
import NotificationCard from '../../components/notification-card';

function HomePage() {
  return (
    <>
      <Header />
      <NotificationCard text="Hello there!" />
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage