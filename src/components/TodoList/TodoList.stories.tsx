import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { TodoList } from './TodoList';

export default {
  title: 'App/TodoList',
  component: TodoList,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = args => <TodoList {...args} />;

export const DefaultStory = Template.bind({});
