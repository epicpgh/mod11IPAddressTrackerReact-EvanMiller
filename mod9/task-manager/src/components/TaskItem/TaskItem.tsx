import React from 'react'
import { TaskItemProps } from '../../types'
import './TaskItem.css'



const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, event.target.value as any)
  }

  const handleDelete = () => {
    onDelete(task.id)
  }

  return (
   <div>
  <h3>{task.title}</h3>
  <p>{task.description}</p>
  <p>Due: {task.dueDate}</p>
  <p>Priority: {task.priority}</p>
  
  <label>
    Status:
    <select value={task.status} onChange={handleStatusChange}>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </label>

  <button onClick={handleDelete}>Delete</button>
</div>
 )}

export default TaskItem