import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { TodoItem, TodoItemProps } from './TodoItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Base/TodoItem',
  component: TodoItem,
} as Meta;

export const TodoItemElement: FC<TodoItemProps> = (args) => (
  <React.Fragment>
    <TodoItem
      {...args}
      todo={{
        title: 'Short message and true',
        completed: true,
        id: 1,
      }}
    />
    <TodoItem
      {...args}
      todo={{
        title:
          'Aliqua nostrud commodo incididunt ut sit. Ex aute ex do id non dolor est adipisicing. Pariatur sunt amet Lorem voluptate aliquip dolore officia. Ipsum sunt',
        completed: false,
        id: 2,
      }}
    />
    <TodoItem
      {...args}
      todo={{
        title: '',
        completed: true,
        id: 3,
      }}
    />
  </React.Fragment>
);
TodoItemElement.args = {
  handleEditChange: action('handleEditChange'),
  handleDelete: action('handleDelete'),
  handleToggle: action('handleToggle'),
};
