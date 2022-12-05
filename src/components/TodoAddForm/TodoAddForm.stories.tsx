import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { FilterButtons } from '../FilterButtons/FilterButtons';
import { TodoAddForm } from './TodoAddForm';

export default {
  title: 'App/TodoAddFormComponent',
  component: TodoAddForm,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof FilterButtons>;

const Template: ComponentStory<typeof FilterButtons> = args => <TodoAddForm {...args} />;

export const DefaultStory = Template.bind({});
