import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';
import Notification from '../components/Notification/Notification';

function Add() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
    phone: '',
  });
  const [errorData, setErrorData] = useState([]);
  const navigation = useNavigate();

  function formHandler(e) {
    e.preventDefault();
    fetchData();
  }

  async function fetchData() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/add`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });
    const result = await res.json();
    if (result.success) {
      if (result.data.affectedRows === 1) {
        setErrorData([]);
        alert('Client successfully added!');
        navigation('/');
      } else {
        setErrorData([{ message: 'Something went wrong. Please try again' }]);
      }
    }
    if (!result.success) {
      setErrorData(result.error);
    }
  }

  return (
    <Container>
      <h2>Add new client</h2>
      <form onSubmit={formHandler}>
        <Input
          name='name'
          labelText='Name'
          type='name'
          placeholder='name'
          handleChange={(name) => setUserDetails({ ...userDetails, name })}
          value={userDetails.name}
        />
        <Input
          name='surname'
          labelText='Surname'
          type='surname'
          placeholder='surname'
          handleChange={(surname) => setUserDetails({ ...userDetails, surname })}
        />
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='email'
          handleChange={(email) => setUserDetails({ ...userDetails, email })}
        />
        <Input
          name='address'
          labelText='Address'
          type='address'
          placeholder='address'
          handleChange={(address) => setUserDetails({ ...userDetails, address })}
        />
        <Input
          name='phone'
          labelText='Phone'
          type='phone'
          placeholder='phone'
          handleChange={(phone) => setUserDetails({ ...userDetails, phone })}
        />
        <Button type='submit' color='#73e495'>
          Add
        </Button>
      </form>
      {errorData.length !== 0 &&
        errorData.map((error) => (
          <Notification key={error.message}>{error.message}</Notification>
        ))}
    </Container>
  );
}

export default Add;
