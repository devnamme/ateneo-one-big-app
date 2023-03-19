import './MobileHeader.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as Auth from './../../context/Auth'
import { getAuth, signOut } from 'firebase/auth';

function MobileHeader() {
  const user = useContext(Auth.Context)
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("#FFFFFF");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [shortcutOpen, setShortcutOpen] = useState(false);

  const handleShortcutClick = () => setShortcutOpen(!shortcutOpen);
  const handleScheduleClick = () => setScheduleOpen(!scheduleOpen);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    setHeaderColor(menuOpen ? "#FFFFFF" : "#003A6C");
  }  
  function onProfileClick() {
    signOut(getAuth())
  }

  return (
    <header className={`mobile-header ${menuOpen ? "active" : ""}`} style={{ backgroundColor: headerColor }}>
      <div className="mobile-main-wrapper">
        {menuOpen ? (
          <img className="hamburger" src="/hamburger-icon-white.svg" alt="Hamburger Icon" onClick={handleMenuClick} />
        ) : (
          <img className="hamburger" src="/hamburger-icon.svg" alt="Hamburger Icon" onClick={handleMenuClick} />
        )}
        <div className="mobile-logo-container" style={{ display: menuOpen ? "none" : "block" }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <img id='logo' src="/logo.svg" alt="Logo" />
            <h4>ONE BIG APP</h4>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu-container">
          <div className='image-data-container'>
            <div className="profile-container" onClick={onProfileClick}>
                <img src={user.photoURL} alt="Profile" />
                <h4 className='profile-data'>{user.displayName}</h4>
            </div>
          </div>
          <div className='content-container'>
            <div className="menu-item-container">
              <img id='menu-home' src='home.svg' alt='home' />
              <Link to='' id = 'text-home' className='item-text'>Home</Link>
            </div>
            <div className="menu-item-container">
              <img src='news.svg' alt='news' />
              <Link to='news' className='item-text'>News</Link>
            </div>
            <div className="menu-item-container">
              <img src='calendar.svg' alt='calendar' />
              <Link to='schedules' className='item-text'>Schedules</Link>
              <img src='arrow.svg' alt='arrow' className='arrow' onClick={handleScheduleClick}/>
            </div>
            {scheduleOpen && ( 
              <div className="collapsible-div">
                  <Link to="/schedule/enlistment" className='collapsible-text'>Enlistment</Link>
                  <Link to="/schedules" className='collapsible-text'>My Schedule</Link>
              </div>
            )}
            <div className="menu-item-container">
              <img src='map.svg' alt='map' />
              <Link to='campus' className='item-text'>Campus Map</Link>
            </div>
            <div className="menu-item-container">
              <h4 id='shortcuts' className='item-text'>Shortcuts</h4>
              <img src='arrow.svg' alt='arrow' className='arrow' onClick={handleShortcutClick}/>
            </div>
            {shortcutOpen && ( 
              <div className="collapsible-div">
                <a
                      target="_blank"
                      href="https://www.ateneo.edu/"
                      className='collapsible-text'
                    >Ateneo Website</a>
                    <a
                      target="_blank"
                      href="https://aisis.ateneo.edu/"
                      className='collapsible-text'
                    >AISIS</a>
                    <a
                      target="_blank"
                      href="https://canvas.ateneo.edu/"
                      className='collapsible-text'
                    >Canvas</a>
                    <a
                      target="_blank"
                      href="https://sites.google.com/ateneo.edu/ls-one"
                      className='collapsible-text'
                    >LS One</a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/spreadsheets/d/1phI0exizODI4pnONwIWaGM8o5paq3aWUW_NbZhNcnzM/edit?usp=sharing"
                      className='collapsible-text'
                    >LS Directory</a>
              </div>
            )}
              <div className='log-out'>
                <img src='logout.svg' alt='logout' />
                <p id='logout-text'>Log Out</p>
              </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;


