import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_INPUT,
  SET_MODE,
  SET_SELECTED_TODO,
  SET_SHOW_ADD_OR_EDIT,
  TOGGLE_TODO,
} from "../data/constant";
import { Action, GlobalContextType } from "./globalContext";

export const reducer = (
  state: GlobalContextType,
  action: Action
): GlobalContextType => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case SET_SHOW_ADD_OR_EDIT:
      return { ...state, showAddOrEdit: action.value };
    case SET_SELECTED_TODO:
      return { ...state, selectedTodo: action.value };
    case SET_MODE:
      return { ...state, mode: action.value };
    case SET_INPUT:
      return { ...state, inputText: action.value };
    default:
      return state;
  }
};
