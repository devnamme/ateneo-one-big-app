import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import * as Auth from './../../context/Auth'

import './Home.css'

import Header from '../../components/header/index';
import NotificationCard from '../../components/notification-card';
import Timetable from '../../components/timetable'
import Card from '../../components/class-card/Card';

function HomePage() {
  const user = useContext(Auth.Context)
  if (!user) return <Navigate to="/login" />

  return (
    <>
      <Header />
      <NotificationCard text="Hello there!" />
      <Timetable />
      <h1>Home Page</h1>
      <Card title="CSCI 42" profName="JEFFREY J. JONGKO" />
    </>
  )
}

export default HomePage