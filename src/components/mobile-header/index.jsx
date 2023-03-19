import './MobileHeader.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as Auth from './../../context/Auth'
import { getAuth, signOut } from 'firebase/auth';

function MobileHeader() {
  const user = useContext(Auth.Context)
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("#FFFFFF");

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
            <ul className="mobile-menu">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;


