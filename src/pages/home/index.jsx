import './Home.css'
import Header from '../../components/header/index';
import NotificationCard from '../../components/notification-card';
import Card from '../../components/class-card/Card';

function HomePage() {
  return (
    <>
      <Header />
      <NotificationCard text="Hello there!" />
      <h1>Home Page</h1>
      <Card title="CSCI 42" profName="JEFFREY J. JONGKO" />
    </>
  )
}

export default HomePage