import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../..';
import { FilterButtons } from './FilterButtons';

export default {
  title: 'Base/FilterButtons',
  component: FilterButtons,
  decorators: [(story: () => ReactNode) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof FilterButtons>;

const Template: ComponentStory<typeof FilterButtons> = args => <FilterButtons {...args} />;

export const DefaultStory = Template.bind({});
