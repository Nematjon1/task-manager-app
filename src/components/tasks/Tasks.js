import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../redux/tasks/tasksSlice';
import { fetchUsers } from '../../redux/users/usersSlice';

import Task from "./Task";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchUsers());
    console.log(users);
    console.log(tasks);
    // eslint-disable-next-line
  }, [dispatch]);

  if(tasks.loading === "pending") {
    return <tr className="text-alarm"><td>Loading tasks...</td></tr>
  } else {
    return (
      <>
        {
          tasks.tasks.map((task, idx) => {
            return <Task task={task} users={users} key={task.id}/>
          })
        }
      </> 
    )
  }
}