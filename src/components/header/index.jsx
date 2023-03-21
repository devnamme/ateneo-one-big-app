import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import * as Auth from './../../context/Auth'
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const user = useContext(Auth.Context)

  function onProfileClick() {
    signOut(getAuth())
  }

  return (
    <header className="header">
    <div className ="main-wrapper">
        <div className="logo-container">
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <img src="/logo.svg" alt="Logo" />
            <h1>ONE BIG APP</h1>
            </Link>
        </div>
        <div className="button-container">
            <Link to=''>
                <button>Home</button>
            </Link>
                <Link to='news'>
                <button>News</button>
            </Link>
            <div className="dropdown">
                <Link to='schedules'>
                    <button>Schedule</button>
                </Link>
                <div className="dropdown-content">
                    <Link to="/schedule/enlistment">Enlistment</Link>
                    <Link to="/schedules">My Schedule</Link>
                </div>
            </div>
            <Link to = 'campus'>
                <button>Campus Map</button>
            </Link>
            <div className="dropdown">
                <button>Shortcuts</button>
                <div className="dropdown-content">
                    <a
                      target="_blank"
                      href="https://www.ateneo.edu/"
                    >Ateneo Website</a>
                    <a
                      target="_blank"
                      href="https://aisis.ateneo.edu/"
                    >AISIS</a>
                    <a
                      target="_blank"
                      href="https://canvas.ateneo.edu/"
                    >Canvas</a>
                    <a
                      target="_blank"
                      href="https://sites.google.com/ateneo.edu/ls-one"
                    >LS One</a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/spreadsheets/d/1phI0exizODI4pnONwIWaGM8o5paq3aWUW_NbZhNcnzM/edit?usp=sharing"
                    >LS Directory</a>
                </div>
            </div>
            <Link to = 'about'>
                <button className="lastbutton">About</button>
            </Link>
            <div className="profile-container" onClick={onProfileClick}>
                <img id ="desktop-img" src={user.photoURL} alt="Profile" />
            </div>
        </div>
    </div>
    </header>
  );
}

export default Header