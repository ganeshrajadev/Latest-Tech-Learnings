import React from 'react';

export default (props) => {
  if (props.data === undefined || props.data === '' || props.data === null) return null;
  return <p>{`${props.name}: ${props.data}`}</p>;
};
