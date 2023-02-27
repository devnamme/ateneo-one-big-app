import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
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
                <a href="schedule/enlistment">Enlistment</a>
                <a href="schedule/:id">My Schedule</a>
            </div>
        </div>
        <Link to = 'campus'>
            <button>Campus Map</button>
        </Link>
        <div className="dropdown">
            <button>Shortcuts</button>
            <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
            </div>
        </div>
        <Link to = 'about'>
            <button className="lastbutton">About</button>
        </Link>
        <div className="profile-container">
            <img src="/profile.svg" alt="Profile" />
        </div>
    </div>
    </header>
  );
}

export default Header