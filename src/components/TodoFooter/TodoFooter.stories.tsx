import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FilterType, TodoFooter, TodoFooterProps } from './TodoFooter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'App/TodoFooter',
  component: TodoFooter,
} as Meta;

export const TodoFooterElement: FC<TodoFooterProps> = (args: TodoFooterProps) => <TodoFooter {...args} />;
TodoFooterElement.args = {
  todoItemsLeft: 0,
  completedCount: 1,
};

type TodoFooteSampleProps = {
  onCompletedClick: () => void;
  onFilterClick: () => void;
};

export const TodoFooterSamples: FC<TodoFooteSampleProps> = (args: TodoFooteSampleProps) => {
  return (
    <>
      <TodoFooter todoItemsLeft={0} completedCount={33} currentFilter={FilterType.All} {...args} />
      <TodoFooter todoItemsLeft={999999999} completedCount={1} currentFilter={FilterType.All} {...args} />
      <TodoFooter todoItemsLeft={1} completedCount={0} currentFilter={FilterType.Completed} {...args} />
    </>
  );
};

TodoFooterSamples.args = {
  onCompletedClick: action('onCompletedClick'),
  onFilterClick: action('onFilterClick'),
};
