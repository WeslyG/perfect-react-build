import './TodoAddFormStyle.css';

import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

import { addTodo, setAllTodoToggle } from '../../actions/todoActions';
import { TodoState } from '../../reducers/todo';

export type TodoAddFormProps = {
  toggleStatus: boolean;
  addTodo: (todoTitle: string) => void;
  setAllTodoToggle: () => void;
};

export const TodoAddFormComponent: FC<TodoAddFormProps> = ({ toggleStatus, addTodo, setAllTodoToggle }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && todoTitle.length > 0) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return (
    <div className="todoAddForm">
      <div className={`${toggleStatus ? 'enabledAll' : ''} toggleAll`} onClick={setAllTodoToggle}></div>
      <input
        className="todoAddInput"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={({ target }) => setTodoTitle(target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    toggleStatus: state.app.todos.filter(todo => todo.completed).length === state.app.todos.length,
  };
};

const mapDispatchToProps = {
  addTodo,
  setAllTodoToggle,
};

export const TodoAddForm = connect(mapStateToProps, mapDispatchToProps)(TodoAddFormComponent);
