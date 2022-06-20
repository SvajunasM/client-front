import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

function Input({ name, type, placeholder, handleChange }) {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };
  return (
    <S.Form>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.Form>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Input;
