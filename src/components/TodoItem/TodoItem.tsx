import './TodoItemStyle.css';

import React, { FC, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { deleteTodo, editTodo, setTodoCompleted } from '../../actions/todoActions';
import { Todo } from '../../App';
import { CheckBox } from '../CheckBox/CheckBox';

export type TodoItemProps = {
  todo: Todo;
  handleEditChange: (todo: Todo) => void;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
};

const TodoItemComponent: FC<TodoItemProps> = ({ todo, handleEditChange, handleDelete, handleComplete }) => {
  const [hoverState, setHoverState] = useState(false);
  const [buffer, setBuffer] = useState(todo.title);
  const [isEditable, setIsEditable] = useState(false);

  const handleHover = (state: boolean) => {
    setHoverState(state);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickOutSide = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      handleEditChange({
        ...todo,
        title: buffer,
      });
      setIsEditable(false);
    }
  };

  useEffect(() => {
    if (isEditable) {
      document.addEventListener('mousedown', onClickOutSide);
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        handleEditChange({
          ...todo,
          title: buffer,
        });
        setIsEditable(false);
        break;
      case 'Escape':
        setBuffer(todo.title);
        setIsEditable(false);
        break;
      default:
        break;
    }
  };

  return (
    <li
      className={todo.completed ? 'crossed todoItem' : 'todoItem'}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div>
        <CheckBox isChecked={todo.completed} onClick={() => handleComplete(todo.id)} />
      </div>
      {isEditable ? (
        <input
          type="text"
          className="inputEdit"
          value={buffer}
          onChange={({ target }) => setBuffer(target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      ) : (
        <p className="title" onDoubleClick={() => setIsEditable(!isEditable)}>
          {todo.title}
        </p>
      )}
      <button
        className={hoverState ? 'destroyButton showDestroyButton' : 'destroyButton hideDestroyButton'}
        onClick={() => handleDelete(todo.id)}
      >
        x
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  handleEditChange: editTodo,
  handleDelete: deleteTodo,
  handleComplete: setTodoCompleted,
};

export const TodoItem = connect(null, mapDispatchToProps)(TodoItemComponent);
