import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    loading: "idle",
    tasks: []
  },
  reducers: {
    tasksLoading: (state, action) => {
      if(state.loading === "idle") {
        state.loading = "pending";
      }
    },

    tasksReceived(state, action) {
      if(state.loading === "pending") {
        state.loading = "idle";
        state.tasks = action.payload;
      }
    },
    
    updateTask: (state, action) => {

    },

    deleteTask: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { tasksLoading, tasksReceived } = tasksSlice.actions;

export const fetchTasks = () => (dispatch) => {
  dispatch(tasksLoading());
  fetch("http://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => dispatch(tasksReceived(data)));
}

export default tasksSlice.reducer