import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TodoList, TodoListProps } from './TodoList';
import { FilterType } from '../TodoFooter/TodoFooter';

export default {
  title: 'App/TodoList',
  component: TodoList,
} as Meta;

export const TodoListSamples: FC<TodoListProps> = (args: TodoListProps) => (
  <React.Fragment>
    <TodoList
      {...args}
      todos={[
        {
          title: 'first element',
          completed: true,
          id: 3,
        },
        {
          title: 'second element',
          completed: false,
          id: 2,
        },
      ]}
    />
  </React.Fragment>
);
TodoListSamples.args = {
  currentFilter: FilterType.All,
  handleEditChange: action('handleEditChange'),
  handleDelete: action('handleDelete'),
  handleToggle: action('handleToggle'),
};
