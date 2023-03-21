import { useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as Auth from './../../context/Auth'

import Header from '../../components/header/index';
import MobileHeader from '../../components/mobile-header/index';

function PageLayout() {
  const user = useContext(Auth.Context)
  const screenWidth = 1160;
  const [isMobile, setIsMobile] = useState(window.innerWidth < screenWidth);
  const handleResize = () => {
    setIsMobile(window.innerWidth < screenWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  if (!user) return <Navigate to="/login" />

  return (
    <>
      {isMobile ? <MobileHeader/> : <Header />}
      <Outlet />
    </>
  );
}

export default PageLayout