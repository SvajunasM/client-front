import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Register() {
  const [error, setError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  async function formHandler(e) {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });
    const result = await res.json();
    console.log(result);
    if (result.success) alert(result.data);
    // setError(result.error || 'Unexpected error');
  }
  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={formHandler}>
        <Input
          name='username'
          labelText='Username'
          type='username'
          placeholder='username'
          handleChange={(username) => setUserDetails({ ...userDetails, username })}
        />
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='email'
          handleChange={(email) => setUserDetails({ ...userDetails, email })}
        />
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='password'
          handleChange={(password) => setUserDetails({ ...userDetails, password })}
        />
        <Button type='submit' color='#39ace7'>
          Register
        </Button>
      </form>
    </Container>
  );
}

export default Register;
