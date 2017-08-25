import React from 'react';

const LastName = props => {
  return (
    <label>{props.label}
      <input
        value={props.content}
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
      />
    </label>
  );
}

export default LastName;
