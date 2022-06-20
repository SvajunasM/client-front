import React from 'react';
import ReactLoading from 'react-loading';

function LoadElement() {
  return (
    <ReactLoading
      type={'spinningBubbles'}
      color={'violet'}
      height={'20%'}
      width={'20%'}
    />
  );
}

export default LoadElement;
