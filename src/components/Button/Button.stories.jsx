import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => (
  <Button color='red' type='button'>
    login
  </Button>
);
