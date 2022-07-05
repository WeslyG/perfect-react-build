import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ClearCompleted } from '../ClearCompleted/ClearCompleted';
import { FilterButtons } from '../FilterButtons/FilterButtons';
import './TodoFooter.css';
import { completedClick } from '../../actions/filterActions';

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

const mapStateToProps = (state) => {
  return {
    completedCount: state.app.todos.filter((todo) => todo.completed).length > 0,
    todoItemsLeft: state.app.todos.filter((todo) => !todo.completed).length,
  };
};

const mapDispatchToProps = {
  completedClick,
};

export const TodoFooter = connect(mapStateToProps, mapDispatchToProps)(TodoFooterComponent);
