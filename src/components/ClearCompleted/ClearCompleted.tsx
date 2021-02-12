import React, { FC } from 'react';
import { connect } from 'react-redux';
import './ClearCompleted.css';
import { completedClick } from '../../actions/filterActions';

export type ClearCompletedProps = {
  completedCount: boolean;
  completedClick: () => void;
};

export const ClearCompletedComponent: FC<ClearCompletedProps> = ({ completedCount, completedClick }) => {
  return (
    <div className="clearCompleted">{completedCount ? <p onClick={completedClick}>Clear completed</p> : <p></p>}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    completedCount: state.app.todos.filter((todo) => todo.completed).length > 0,
  };
};

const mapDisapatchToProps = {
  completedClick,
};

export const ClearCompleted = connect(mapStateToProps, mapDisapatchToProps)(ClearCompletedComponent);
