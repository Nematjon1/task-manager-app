
import React from 'react'


export default function Task({task, users}) {
  const handleChange = (e) => {

  }

  return (
    <tr>
      <th scope="row">{task.id}</th>
      <td>{task.title}</td>
      <td>{users.users.find(u => u.id === task.userId).name}</td>
      <td>
        <input type="checkbox" checked={task.completed} onChange={handleChange} />
        {task.completed ? "Done" : "Active"}
      </td>
    </tr>
  )
}