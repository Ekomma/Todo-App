import { createContext, ReactNode, useContext, useReducer } from "react";
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
import { reducer } from "./reducer";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface GlobalContextType {
  todos: Todo[];
  showAddOrEdit: boolean;
  mode?: "edit" | "add";
  selectedTodo?: Todo;
  inputText: string;
}

export type Action =
  | { type: typeof ADD_TODO; text: string }
  | { type: typeof EDIT_TODO; id: number; text: string }
  | { type: typeof DELETE_TODO; id: number }
  | { type: typeof TOGGLE_TODO; id: number }
  | { type: typeof SET_SHOW_ADD_OR_EDIT; value: boolean }
  | { type: typeof SET_SELECTED_TODO; value: Todo | undefined }
  | { type: typeof SET_MODE; value: "add" | "edit" | undefined }
  | { type: typeof SET_INPUT; value: string };

const initialState: GlobalContextType = {
  todos: [
    {
      completed: true,
      id: 1,
      text: "Training at the Gym",
    },
    {
      completed: false,
      id: 2,
      text: "Play Paddle with friends",
    },
    {
      completed: false,
      id: 3,
      text: "Burger BBQ with family",
    },
  ],
  showAddOrEdit: false,
  mode: undefined,
  selectedTodo: undefined,
  inputText: "",
};

const GlobalContext = createContext<
  { state: GlobalContextType; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within an GlobalContextProvider"
    );
  }

  const { state, dispatch } = context;

  const addTodo = (text: string) => {
    dispatch({ type: ADD_TODO, text });
  };

  const editTodo = (id: number, text: string) => {
    dispatch({ type: EDIT_TODO, id, text });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: DELETE_TODO, id });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: TOGGLE_TODO, id });
  };

  const setShowAddOrEdit = (value: boolean) => {
    dispatch({ type: SET_SHOW_ADD_OR_EDIT, value });
  };

  const setSelectedTodo = (value: Todo | undefined) => {
    dispatch({ type: SET_SELECTED_TODO, value });
  };

  const setMode = (value: "edit" | "add" | undefined) => {
    dispatch({ type: SET_MODE, value });
  };

  const setInput = (value: string) => {
    dispatch({ type: SET_INPUT, value });
  };

  return {
    state,
    setMode,
    addTodo,
    setInput,
    editTodo,
    deleteTodo,
    toggleTodo,
    setSelectedTodo,
    setShowAddOrEdit,
  };
};
