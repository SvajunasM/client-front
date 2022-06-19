import React from 'react';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

function Add() {
  return (
    <Container>
        <h2>Add new emplyee</h2>
      <form>
        <Input name='name' labelText='Name' type='name' placeholder='name' />
        <Input
          name='surname'
          labelText='Surname'
          type='surname'
          placeholder='surname'
        />
        <Input name='email' labelText='Email' type='email' placeholder='email' />
        <Input
          name='address'
          labelText='Address'
          type='address'
          placeholder='address'
        />
        <Input name='phone' labelText='Phone' type='phone' placeholder='phone' />
        <Button type='submit' color='green'>
          Add
        </Button>
      </form>
    </Container>
  );
}

export default Add;

