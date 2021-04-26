import React from 'react';
import {useAuth} from '../components/context/auth';
import {AuthRoute} from './authRoute/AuthRoute';
import {NotAuthRoute} from './notAuthRoute/NotAuthRoute';
const Routes = () => {
  const auth = useAuth();
  return auth.user ? <AuthRoute /> : <NotAuthRoute />;
};

export default Routes;

// initialRouteName="Settings"

