import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

function Input({ name, labelText, type, placeholder, handleChange }) {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };
  return (
    <div>
      <S.Label htmlFor={name}>{labelText}</S.Label>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Input;
