import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TodoAddForm, TodoAddFormProps } from './TodoAddForm';

export default {
  title: 'App/TodoAddFormComponent',
  component: TodoAddForm,
} as Meta;

export const TodoAddFormComponent: FC<TodoAddFormProps> = (args: TodoAddFormProps) => {
  return <TodoAddForm {...args} />;
};

TodoAddFormComponent.args = {
  toggleStatus: true,
  onSetAllToggle: action('onSetAllToggle'),
  onCreate: action('onCreate'),
};
