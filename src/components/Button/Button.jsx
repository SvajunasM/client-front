import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

function Button({ children, type, color }) {
  return (
    <S.Button color={color} type={type}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;