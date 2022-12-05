import './ClearCompleted.css';

import React, { FC } from 'react';
import { connect } from 'react-redux';

import { completedClick } from '../../actions/filterActions';
import { TodoState } from '../../reducers/todo';

export type ClearCompletedProps = {
  completedCount: boolean;
  completedClick: () => void;
};

export const ClearCompletedComponent: FC<ClearCompletedProps> = ({ completedCount, completedClick }) => {
  return (
    <div className="clearCompleted">{completedCount ? <p onClick={completedClick}>Clear completed</p> : <p></p>}</div>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    completedCount: state.app.todos.filter(todo => todo.completed).length > 0,
  };
};

const mapDispatchToProps = {
  completedClick,
};

export const ClearCompleted = connect(mapStateToProps, mapDispatchToProps)(ClearCompletedComponent);
