import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  todos: [],
  completed: false,
};
// console.log("initialState",initialState);
export const createSliceTodo = createSlice({
  name: "todo",
  initialState,

  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
    },
    delete(state, action) {
      console.log("delete", action);
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    deleteAll(state) {
      state.todos = [];
    },

    edit(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.value,
          };
        }
      });
    },

    completedtodos(state, action) {
      console.log("com", action);
      const todo = state.todos.find((todo) => todo.id === action.payload);
      console.log(todo);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const todosActions = createSliceTodo.actions;
