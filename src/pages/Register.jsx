import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';
import Notification from '../components/Notification/Notification';

function Register() {
  const [errorData, setErrorData] = useState([]);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigate();

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
    if (result.success) {
      setErrorData([]);
      alert(result.data);
      navigation('/login');
    }
    if (!result.success) {
      setErrorData(result.error);
    }
  }
  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={formHandler}>
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
      {errorData.length !== 0 &&
        errorData.map((error) => (
          <Notification key={error.message}>{error.message}</Notification>
        ))}
    </Container>
  );
}

export default Register;
