import React from 'react';

const TodoListItem = ({ item, onComplete, onRemove }) => {
  const completed = {
    color: 'eee',
    textDecoration: 'line-through'
  };
  let template = (
    <li>
      <label>
        <input
          type="checkbox"
          name="completed"
          value={item.completed}
          onChange={() => onComplete(item.id)}
        />
        <span style={item.completed ? completed : null}>
          {item.text}
        </span>{' '}
        {item.createAt}
      </label>
      <button onClick={() => onRemove(item.id)}>
        삭제
      </button>
    </li>
  );

  return <ul>{template}</ul>;
};

export default TodoListItem;
