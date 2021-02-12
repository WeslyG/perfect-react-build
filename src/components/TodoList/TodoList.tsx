import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../../App';
import { FilterType } from '../TodoFooter/TodoFooter';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoListStyle.css';

export type TodoListProps = {
  todos: Todo[];
  currentFilter: FilterType;
};

export const TodoListComponent: FC<TodoListProps> = ({ todos, currentFilter }) => {
  function todoFilter(currentFilter: FilterType) {
    switch (currentFilter) {
      case FilterType.Active:
        return todos.filter((todo) => !todo.completed);
      case FilterType.Completed:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
    <ul>
      {todoFilter(currentFilter).map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.app.todos,
    currentFilter: state.filter.currentFilter,
  };
};

export const TodoList = connect(mapStateToProps, null)(TodoListComponent);
