import { FilterType } from '../components/TodoFooter/TodoFooter';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETE } from './types';

const initialState = {
  currentFilter: FilterType.All,
};

type Action = {
  type: string;
};

export function filterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FILTER_ALL:
      return { currentFilter: FilterType.All };
    case FILTER_ACTIVE:
      return { currentFilter: FilterType.Active };
    case FILTER_COMPLETE:
      return { currentFilter: FilterType.Completed };
    default:
      return state;
  }
}
