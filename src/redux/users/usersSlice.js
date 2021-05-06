import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: "idle",
    users: []
  },
  reducers: {
    usersLoading: (state, action) => {
      if(state.loading === "idle") {
        state.loading = "pending";
      }
    },

    usersReceived(state, action) {
      if(state.loading === "pending") {
        state.loading = "idle";
        state.users = action.payload;
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { usersLoading, usersReceived } = usersSlice.actions;

export const fetchUsers = () => (dispatch) => {
  dispatch(usersLoading());
  fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch(usersReceived(data)));
}

export default usersSlice.reducer