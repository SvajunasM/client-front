import React from 'react';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Register() {
  return (
    <Container>
      <Input name='email' labelText='Email' type='email' placeholder='email' />
    </Container>
  );
}

export default Register;
