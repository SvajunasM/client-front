import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header({ children }) {
  return (
    <S.Header>
      <S.Title>Manage clients</S.Title>
      <S.Links>
        <S.Link href='#'>Remove</S.Link>
        <S.Link href='#'>Login</S.Link>
      </S.Links>
    </S.Header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;