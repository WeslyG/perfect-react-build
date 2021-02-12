import { COMPLETED_CLEAR, FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETE } from '../reducers/types';

interface FilterAction {
  type: string;
}

export function filterAll(): FilterAction {
  return {
    type: FILTER_ALL,
  };
}

export function filterComplete(): FilterAction {
  return {
    type: FILTER_COMPLETE,
  };
}

export function filterActive(): FilterAction {
  return {
    type: FILTER_ACTIVE,
  };
}

export function completedClick(): FilterAction {
  return {
    type: COMPLETED_CLEAR,
  };
}
