import React, { FC } from 'react';
import { connect } from 'react-redux';
import { FilterType } from '../TodoFooter/TodoFooter';
import './FilterButtons.css';
import { filterActive, filterAll, filterComplete } from '../../actions/filterActions';

export type FilterButtonsProps = {
  currentFilter: FilterType;
  filterAll: () => void;
  filterActive: () => void;
  filterComplete: () => void;
};

const FilterButtonsComponent: FC<FilterButtonsProps> = ({ currentFilter, filterAll, filterActive, filterComplete }) => {
  return (
    <div>
      <button className={`${currentFilter === FilterType.All && 'active'} btn`} onClick={filterAll}>
        {FilterType.All}
      </button>
      <button className={`${currentFilter === FilterType.Active && 'active'} btn`} onClick={filterActive}>
        {FilterType.Active}
      </button>
      <button className={`${currentFilter === FilterType.Completed && 'active'} btn`} onClick={filterComplete}>
        {FilterType.Completed}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFilter: state.filter.currentFilter,
  };
};

const mapDispatchToProps = {
  filterAll,
  filterComplete,
  filterActive,
};

export const FilterButtons = connect(mapStateToProps, mapDispatchToProps)(FilterButtonsComponent);
