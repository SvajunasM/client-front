import React, { useContext } from 'react';
import AuthContext from '../../store/authContext';
import * as S from './Header.style';

function Header() {
  const authCtx = useContext(AuthContext);

  return (
    <S.Header>
      <S.Title>Manage clients</S.Title>
      <S.Links>
        {authCtx.isLogged && <S.Navigate to='/'>home</S.Navigate>}
        {authCtx.isLogged && <S.Navigate to='/add'>add</S.Navigate>}
        {!authCtx.isLogged && <S.Navigate to='/register'>Register</S.Navigate>}
        {!authCtx.isLogged && <S.Navigate to='/login'>Login</S.Navigate>}
        {authCtx.isLogged && (
          <S.Navigate onClick={authCtx.logout} to={'/login'}>
            Logout
          </S.Navigate>
        )}
      </S.Links>
    </S.Header>
  );
}

export default Header;

