import { useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as Auth from './../../context/Auth'

import Header from '../../components/header/index';
import MobileHeader from '../../components/mobile-header/index';

function PageLayout() {
  const user = useContext(Auth.Context)
  const screenWidth = 1280;
  const [isMobile, setIsMobile] = useState(window.innerWidth < screenWidth);
  const handleResize = () => {
    console.log('handleResize called')
    console.log('window.innerWidth:', window.innerWidth)
    setIsMobile(window.innerWidth < screenWidth);
    console.log('isMobile:', isMobile)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  console.log('isMobile:', isMobile)
  if (!user) return <Navigate to="/login" />
  return (
    <>
      {isMobile ? <MobileHeader/> : <Header />}
      <Outlet />
    </>
  );
}

export default PageLayout