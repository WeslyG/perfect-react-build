import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Base/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = args => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  isChecked: false,
};
