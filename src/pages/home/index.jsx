import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as Auth from './../../context/Auth'

import './Home.css'

import NotificationCard from '../../components/notification-card';
import Timetable from '../../components/timetable'
import Card from '../../components/class-card';

function HomePage() {
  const user = useContext(Auth.Context)
  if (!user) return <Navigate to="/login" />

  return (
    <>
      <div id='home-main-wrapper'>
      </div>
      <div id='home-main-text-wrapper'>
          <h1>ONE BIG APP</h1>
          <p> Your one stop web application for all your academic needs </p>
          <a href='/about'> Learn More </a>
      </div>
      <div id='home-features-wrapper'>
        <h2> Features </h2>
        <hr/>
        <div id='home-pages-wrapper'>
          <div class='home-page-card'>
            <img src='../src/assets/home/home_news.jpg'></img>
            <div class='home-page-card-text'>
              <h1> News </h1>
              <p> Catch up on all the latest Atenean News </p>
              <a href='/news'> Go to News </a>
            </div>
          </div>

          <div class='home-page-card'>
            <img src='../src/assets/home/home_schedule.jpg'></img>
            <div class='home-page-card-text'>
              <h1> Schedule </h1>
              <p> Create a class schedule here </p>
              <a href='/schedules'> Go to Schedule </a>
            </div>
          </div>

          <div class='home-page-card'>
            <img src='../src/assets/home/home_campus_map.jpg'></img>
            <div class='home-page-card-text'>
              <h1> Campus Map </h1>
              <p> Explore a map of the Atenean Campus </p>
              <a href='/campus'> Go to Campus Map </a>
            </div>
          </div>
        </div>
      </div>
      <NotificationCard text="Hello there!" />
    </>
  )
}

export default HomePage