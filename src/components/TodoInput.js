import React from 'react';

const TodoInput = ({ text, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoInput;
