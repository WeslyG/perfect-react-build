import { Todo } from '../App';
import { FilterType } from '../components/TodoFooter/TodoFooter';
import { isNotNull } from '../helpers/helper';
import {
  ADD_TODO,
  ALL_ACTIONS,
  COMPLETED_CLEAR,
  DELETE_TODO,
  EDIT_TODO,
  SET_ALL_TODO_TOGGLE,
  SET_TODO_COMPLETED,
} from './types';

const isStoreExist = localStorage.getItem('store');

const defaultStoreValue = {
  filter: {
    currentFilter: 'All',
  },
  app: {
    todos: [
      {
        id: 1,
        title: 'buy a coffee',
        completed: false,
      },
      {
        id: 2,
        title: 'write code',
        completed: false,
      },
    ],
  },
};

export interface AppState {
  todos: Todo[];
}

export interface TodoState {
  filter: {
    currentFilter: FilterType;
  };
  app: {
    todos: Todo[];
  };
}

const initStoreWithDefaultData = (): AppState => {
  localStorage.setItem('store', JSON.stringify(defaultStoreValue));
  return defaultStoreValue.app;
};

const initialState = isStoreExist ? (JSON.parse(isStoreExist)['app'] as AppState) : initStoreWithDefaultData();

type Action = {
  type: ALL_ACTIONS;
  todo?: Todo; // edit
  id?: number; // toggle, delete
  title?: string; // create
};

export function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.title,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.id)],
      };
    case SET_TODO_COMPLETED:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map(todoItem => {
          if (todoItem.id === (isNotNull(action.todo) ? action.todo?.id : -1)) {
            return action.todo;
          }
          return todoItem;
        }),
      };
    case SET_ALL_TODO_TOGGLE:
      return {
        todos:
          state.todos.length === state.todos.filter(todo => todo.completed).length
            ? state.todos.map(todo => {
                return {
                  ...todo,
                  completed: false,
                };
              })
            : state.todos.map(todo => {
                return {
                  ...todo,
                  completed: true,
                };
              }),
      };
    case COMPLETED_CLEAR:
      return {
        todos: state.todos.filter((todo: Todo) => !todo.completed),
      };
    default:
      return state;
  }
}
