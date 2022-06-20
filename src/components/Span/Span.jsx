import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Span.style';

function Span({ children }) {
  return <S.Span>{children}</S.Span>;
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Span;
