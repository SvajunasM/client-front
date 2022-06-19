import React from 'react';
import * as S from './Header.style';

function Header() {
  return (
    <S.Header>
      <S.Title>Manage clients</S.Title>
      <S.Links>
        <S.Navigate to='/'>home</S.Navigate>
        <S.Navigate to='/add'>add</S.Navigate>
        <S.Navigate to='/register'>Register</S.Navigate>
        <S.Navigate to='/login'>Login</S.Navigate>
      </S.Links>
    </S.Header>
  );
}

export default Header;
