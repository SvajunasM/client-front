import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

function Button({ children, type, color, dataId, test }) {
  function handleClick() {
    if (test) {
      test(dataId);
    }
  }
  return (
    <S.Button color={color} type={type} onClick={handleClick}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  color: PropTypes.string.isRequired,
  test: PropTypes.func,
  dataId: PropTypes.node,
};

export default Button;
