import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.style';

function Table(props) {
  return (
    <S.Table>
      <S.Thead>
        <S.TheadTr>
          <S.Th>Name</S.Th>
          <S.Th>Email</S.Th>
          <S.Th>Address</S.Th>
          <S.Th>Phone</S.Th>
        </S.TheadTr>
      </S.Thead>
      <S.Tbody>
        <S.Tr>
          <S.Td>Thomas Hardy</S.Td>
          <S.Td>thomashardy@mail.com</S.Td>
          <S.Td>89 Chiaroscuro Rd, Portland, USA</S.Td>
          <S.Td>(171) 555-2222</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>Dominique Perrier</S.Td>
          <S.Td>dominiqueperrier@mail.com</S.Td>
          <S.Td>Obere SS.Tr. 57, Berlin, Germany</S.Td>
          <S.Td>(313) 555-5735</S.Td>
        </S.Tr>
      </S.Tbody>
    </S.Table>
  );
}

Table.propTypes = {};

export default Table;
