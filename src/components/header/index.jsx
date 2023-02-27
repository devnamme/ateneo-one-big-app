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
                <a href="https://www.ateneo.edu/">Ateneo Website</a>
                <a href="https://aisis.ateneo.edu/">AISIS</a>
                <a href="https://canvas.ateneo.edu/">Canvas</a>
                <a href="https://sites.google.com/ateneo.edu/ls-one">LS One</a>
                <a href="https://docs.google.com/spreadsheets/d/1phI0exizODI4pnONwIWaGM8o5paq3aWUW_NbZhNcnzM/edit?usp=sharing">LS Directory</a>
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