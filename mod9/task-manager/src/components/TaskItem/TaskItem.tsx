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
        <p>{task.dueDate}</p>
        <p>{task.status}</p>
        <p>{task.priority}</p>
    </div>
 )}

export default TaskItem