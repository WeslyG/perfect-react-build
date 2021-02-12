import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';

import { FilterButtons, FilterButtonsProps } from './FilterButtons';
import { FilterType } from '../TodoFooter/TodoFooter';

export default {
  title: 'Base/FilterButtons',
  component: FilterButtons,
} as Meta;

export const FilterButton = (args: FilterButtonsProps) => {
  return <FilterButtons {...args} />;
};

FilterButton.args = {
  onClick: action('onClick'),
  currentFilter: FilterType.All,
};
