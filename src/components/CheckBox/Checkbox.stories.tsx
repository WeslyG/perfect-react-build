import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'Base/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  isChecked: false,
};
