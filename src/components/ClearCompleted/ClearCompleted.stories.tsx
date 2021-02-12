import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ClearCompleted, ClearCompletedProps } from './ClearCompleted';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Base/ClearCompleted',
  component: ClearCompleted,
} as Meta;

export const ClearCompletedComponent = (args: ClearCompletedProps) => {
  return <ClearCompleted {...args} />;
};

ClearCompletedComponent.args = {
  completedCount: true,
  onClick: action('onClick'),
};
