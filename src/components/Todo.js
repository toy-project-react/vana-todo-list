import React, { useState } from 'react';
import moment from 'moment';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
  const [id, setId] = useState(0);
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const item = {
      id: id,
      text: text,
      completed: false,
      createAt: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    const nextList = list.concat(item);
    setList(nextList);
    setText('');
    setId(id + 1);
  };

  const onComplete = id => {
    const changeList = list.map(item =>
      item.id === id
        ? {
            ...item,
            completed: true
          }
        : item
    );
    setList(changeList);
  };
  const onRemove = id => {
    const nextList = list.filter(item => item.id !== id);
    setList(nextList);
  };
  return (
    <div>
      <TodoInput
        text={text}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoList
        list={list}
        onComplete={onComplete}
        onRemove={onRemove}
      />
    </div>
  );
};

export default Todo;
