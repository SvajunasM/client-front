import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Add() {
  const [userDetails, setUserDetails] = useState('');

  function formHandler(e) {
    e.preventDefault();
    console.log('userDetails ===', userDetails);
    if (userDetails.length === 0) {
      console.log('empty lines');
      return;
    }
    fetchData();
    setUserDetails('');
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
    console.log('result ===', result);
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
          value={'kkk'}
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
        <Button type='submit' color='green'>
          Add
        </Button>
      </form>
    </Container>
  );
}

export default Add;
