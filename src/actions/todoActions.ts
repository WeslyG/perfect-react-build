import { Todo } from '../App';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_ALL_TODO_TOGGLE, SET_TODO_COMPLETED } from '../reducers/types';

export function addTodo(title: string) {
  return {
    type: ADD_TODO,
    title,
  };
}

export function deleteTodo(id: number) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function setTodoCompleted(id: number) {
  return {
    type: SET_TODO_COMPLETED,
    id,
  };
}

export function setAllTodoToggle() {
  return {
    type: SET_ALL_TODO_TOGGLE,
  };
}

export function editTodo(todo: Todo) {
  return {
    type: EDIT_TODO,
    todo,
  };
}
