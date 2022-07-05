import { TodoFooter } from './components/TodoFooter/TodoFooter';
import { TodoAddForm } from './components/TodoAddForm/TodoAddForm';
import { TodoList } from './components/TodoList/TodoList';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import './AppStyle.css';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export function App(): JSX.Element {
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
}

export default module.hot ? hot(App) : App;
