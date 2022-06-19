import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header({ children }) {
  return (
    <S.Header>
      <S.Title>Manage clients</S.Title>
      <S.Links>
        <S.Navigate to='/'>home</S.Navigate>
        <S.Navigate to='/register'>Register</S.Navigate>
        <S.Navigate to='/login'>Login</S.Navigate>
      </S.Links>
    </S.Header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
