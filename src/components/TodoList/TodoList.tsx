import './TodoListStyle.css';

import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Todo } from '../../App';
import { TodoState } from '../../reducers/todo';
import { FilterType } from '../TodoFooter/TodoFooter';
import { TodoItem } from '../TodoItem/TodoItem';

export type TodoListProps = {
  todos: Todo[];
  currentFilter: FilterType;
};

export const TodoListComponent: FC<TodoListProps> = ({ todos, currentFilter }) => {
  function todoFilter(currentFilter: FilterType) {
    switch (currentFilter) {
      case FilterType.Active:
        return todos.filter(todo => !todo.completed);
      case FilterType.Completed:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <ul>
      {todoFilter(currentFilter).map(todo => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    todos: state.app.todos,
    currentFilter: state.filter.currentFilter,
  };
};

export const TodoList = connect(mapStateToProps)(TodoListComponent);
