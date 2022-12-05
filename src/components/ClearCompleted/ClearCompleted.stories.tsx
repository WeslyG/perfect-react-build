import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { ClearCompleted } from './ClearCompleted';

export default {
  title: 'Base/ClearCompleted',
  component: ClearCompleted,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof ClearCompleted>;

const Template: ComponentStory<typeof ClearCompleted> = args => <ClearCompleted {...args} />;

export const DefaultStory = Template.bind({});
