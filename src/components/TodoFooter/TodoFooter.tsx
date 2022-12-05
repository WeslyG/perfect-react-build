import './TodoFooter.css';

import React, { FC } from 'react';
import { connect } from 'react-redux';

import { completedClick } from '../../actions/filterActions';
import { TodoState } from '../../reducers/todo';
import { ClearCompleted } from '../ClearCompleted/ClearCompleted';
import { FilterButtons } from '../FilterButtons/FilterButtons';

export enum FilterType {
  All = 'All',
  Completed = 'Completed',
  Active = 'Active',
}

export type TodoFooterProps = {
  todoItemsLeft: number;
  completedCount: boolean;
};

export const TodoFooterComponent: FC<TodoFooterProps> = ({ todoItemsLeft }) => {
  return (
    <div className="todoFooter">
      <p className="itemLeft">{todoItemsLeft} item left</p>
      <FilterButtons />
      <ClearCompleted />
    </div>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    completedCount: state.app.todos.filter(todo => todo.completed).length > 0,
    todoItemsLeft: state.app.todos.filter(todo => !todo.completed).length,
  };
};

const mapDispatchToProps = {
  completedClick,
};

export const TodoFooter = connect(mapStateToProps, mapDispatchToProps)(TodoFooterComponent);
