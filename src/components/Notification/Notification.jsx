import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notification.style';

function Notification({ children }) {
  return <S.Notific>{children}</S.Notific>;
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Notification;
