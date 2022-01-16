import { Todo } from '../App';
import { ADD_TODO, COMPLETED_CLEAR, DELETE_TODO, EDIT_TODO, SET_ALL_TODO_TOGGLE, SET_TODO_COMPLETED } from './types';

const initialState = {
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
};

type Action = {
  type: string;
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
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case SET_TODO_COMPLETED:
      // const index = state.todos.findIndex((x) => x.id === action.id);
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
        // todos: [
        //   ...state.todos.slice(0, index),
        //   {
        //     ...state.todos[index],
        //     completed: !state.todos[index].completed,
        //   },
        //   ...state.todos.slice(index + 1),
        // ],
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map((todoItem) => {
          if (todoItem.id === action.todo.id) {
            return action.todo;
          }
          return todoItem;
        }),
      };
    case SET_ALL_TODO_TOGGLE:
      return {
        todos:
          state.todos.length === state.todos.filter((todo) => todo.completed).length
            ? state.todos.map((todo) => {
                return {
                  ...todo,
                  completed: false,
                };
              })
            : state.todos.map((todo) => {
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
