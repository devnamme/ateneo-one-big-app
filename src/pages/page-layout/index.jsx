import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as Auth from './../../context/Auth'

import Header from '../../components/header/index';
import MobileHeader from '../../components/mobile-header/index';

function PageLayout() {
  const user = useContext(Auth.Context)
  if (!user) return <Navigate to="/login" />

  return (
    <>
      <MobileHeader />
      <Outlet />
    </>
  )
}

export default PageLayout