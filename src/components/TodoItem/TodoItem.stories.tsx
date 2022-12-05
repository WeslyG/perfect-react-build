import { action } from '@storybook/addon-actions';
import { ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { TodoItem } from './TodoItem';

export default {
  title: 'App/TodoItem',
  component: TodoItem,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
};

const Template: ComponentStory<typeof TodoItem> = args => <TodoItem {...args} />;

const handles = {
  handleEditChange: action('handleEditChange'),
  handleDelete: action('handleDelete'),
  handleToggle: action('handleToggle'),
};

export const Primary = Template.bind({});
Primary.args = {
  ...handles,
  todo: {
    title: 'Short message and true',
    completed: true,
    id: 1,
  },
};

export const LongName = Template.bind({});
LongName.args = {
  ...handles,
  todo: {
    title:
      'Aliqua nostrud commodo incididunt ut sit. Ex aute ex do id non dolor est adipisicing. Pariatur sunt amet Lorem voluptate aliquip dolore officia. Ipsum sunt',
    completed: false,
    id: 2,
  },
};

export const EmptyName = Template.bind({});
EmptyName.args = {
  ...handles,
  todo: {
    title: '',
    completed: true,
    id: 3,
  },
};
