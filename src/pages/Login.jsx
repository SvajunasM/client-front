import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Login() {
  const [error, setError] = useState(false);
  const [loginDetails, setUserDetails] = useState('');

  const navigation = useNavigate();

  async function formHandler(e) {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    });
    const result = await res.json();
    console.log(result);
    if (result.success) {
      localStorage.setItem('token', result.data);
      return navigation('/');
    }
    setError(result.error || 'Unexpected error');
  }

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={formHandler}>
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='email'
          handleChange={(email) => setUserDetails({ ...loginDetails, email })}
        />
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='password'
          handleChange={(password) => setUserDetails({ ...loginDetails, password })}
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


