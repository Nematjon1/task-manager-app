
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasks/tasksSlice'
import usersReducer from './users/usersSlice'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer
  },
})