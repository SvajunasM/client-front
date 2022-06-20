import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Card.style';

function Card({ data }) {
  return (
    <S.Card>
      <S.Line>Name: {data.name}</S.Line>
      <S.Line>Surname: {data.surname}</S.Line>
      <S.Line>Email: {data.email}</S.Line>
      <S.Line>Address: {data.address}</S.Line>
      <S.Line>Phone number: {data.phone}</S.Line>
    </S.Card>
  );
}

Card.propTypes = {};

export default Card;
