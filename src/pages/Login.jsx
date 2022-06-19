import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Login() {
  return (
    <Container>
      <h2>Login</h2>
      <form>
        <Input name='email' labelText='Email' type='email' placeholder='email' />
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='password'
        />
        <Button type='submit' color='green'>
          Login
        </Button>
      </form>
      <p>
        Don't have account? Please <Link to={'/register'}>Register</Link>
      </p>
    </Container>
  );
}

export default Login;

