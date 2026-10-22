// tasksSlice.js: defines task state and the reducer functions that update state.
import { createSlice } from "@reduxjs/toolkit";

//It is the initial state for the tasks.
const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    // Functions that update task state
    addTask: (state, action) => {
      const title = action.payload.trim();

      if (!title) return;

      state.items.push({
        id: Date.now(),
        title: title,
        completed: false,
        selected: false,
      });
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload.id);
      if (task){
        task.title = action.payload.title;
      }
    },

    toggleSelection: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.selected = !task.selected;
        
      }
    },
  },
});

// This makes all three generated action creators available to App.jsx.
export const { addTask, deleteTask, completeTask, editTask,toggleSelection} = tasksSlice.actions;

export default tasksSlice.reducer;
