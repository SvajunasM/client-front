import React from 'react';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Register() {
  return (
    <Container>
      <h2>Register</h2>
      <form>
        <Input name='email' labelText='Email' type='email' placeholder='email' />
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='password'
        />
        <Button type='submit' color='green'>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;

