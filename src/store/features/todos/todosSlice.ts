import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITodosState } from './types';
import { mockTodos } from '../../../utils/mock';
import { ITodo } from '../../../types';

const initialState: ITodosState = {
  todos: mockTodos,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    // markComplete: (state, action: PayloadAction<{ id: number; complete: boolean }>) => {
    // state.todos = [...state.todos, action.payload];
    // },
  },
});

export const { addTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
