import React from 'react'
import { TaskItemProps } from '../../types'
import './TaskItem.css'



const TaskItem: React.FC<TaskItemProps> = ({ tasks, onStatusChange, onDelete }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(tasks.id, event.target.value as any)
  }

  const handleDelete = () => {
    onDelete(tasks.id)
  }

  return (
    <div>
        <h3>{tasks.title}</h3>
        <p>{tasks.description}</p>
        <p>{tasks.dueDate}</p>
        <p>{tasks.status}</p>
        <p>{tasks.priority}</p>
    </div>
 )}

export default TaskItem