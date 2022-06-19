import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const password = () => (
  <Input
    name='password'
    labelText='password'
    type='password'
    placeholder='Password'
  />
);
export const email = () => (
  <Input name='email' labelText='Email' type='email' placeholder='email' />
);
