import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.Todos.push(action.payload);
    },
  },
  setcompleted: (state, action) => {
    const todo = state.Todos.find((todo) => todo.id === action.payload.id);
    if (todo) {
      todo.setcompleted = !todo.setcompleted;
      console.log(todo.setcompleted);
    }
  },
  removeTodo: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
});
export const { addTodo, setcompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
