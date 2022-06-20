import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';

const PrivateRoute = ({ children }) => {
  const ctxValue = useContext(AuthContext);
  if (localStorage.getItem('token') && ctxValue.isLogged) {
    return children;
  }
  return <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
