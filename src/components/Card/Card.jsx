import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Card.style';
import Button from '../Button/Button';

function Card({ data, test }) {
  return (
    <S.Card>
      <S.Line>Name: {data.name}</S.Line>
      <S.Line>Surname: {data.surname}</S.Line>
      <S.Line>Email: {data.email}</S.Line>
      <S.Line>Address: {data.address}</S.Line>
      <S.Line>Phone number: {data.phone}</S.Line>
      <Button dataId={data.client_id} type='button' color='red' test={test}>
        remove
      </Button>
    </S.Card>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
