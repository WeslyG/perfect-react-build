import './AppStyle.css';

import React from 'react';

import { TodoAddForm } from './components/TodoAddForm/TodoAddForm';
import { TodoFooter } from './components/TodoFooter/TodoFooter';
import { TodoList } from './components/TodoList/TodoList';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const App = (): JSX.Element => {
  return (
    <div className="todoApp">
      <h1>todos</h1>
      <div className="todoList">
        <TodoAddForm />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};
