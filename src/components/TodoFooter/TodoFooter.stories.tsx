import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { TodoFooter } from './TodoFooter';

export default {
  title: 'App/TodoFooter',
  component: TodoFooter,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof TodoFooter>;

const Template: ComponentStory<typeof TodoFooter> = args => <TodoFooter {...args} />;

export const defaultStory = Template.bind([]);
