import { useState } from 'react';
import React from 'react';
import TaskItem from './components/TaskItem/TaskItem';

import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import { Task, TaskStatus,  } from './types';

import './App.css';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Design landing page',
    description: 'Create the initial wireframe and mockups for the landing page.',
    status: "pending",
    priority: 'high',
    dueDate: '2025-06-20',
  },
  {
    id: '2',
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions for automated testing and deployment.',
    status: "pending",
    priority: 'medium',
    dueDate: '2025-06-18',
  },
  {
    id: '3',
    title: 'Fix login bug',
    description: 'Resolve the issue where users can\'t log in with Google OAuth.',
    status: "in-progress",
    priority: 'high',
    dueDate: '2025-06-14',
  },
  {
    id: '4',
    title: 'Write unit tests',
    description: 'Add coverage for the user service module.',
    status: "in-progress",
    priority: 'low',
    dueDate: '2025-06-22',
  },
  {
    id: '5',
    title: 'Deploy to staging',
    description: 'Push the latest build to the staging environment for QA.',
    status: "completed",
    priority: 'medium',
    dueDate: '2025-06-10',
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialTasks);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleDelete = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilterChange = (filters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => {
    let result = [...tasks];
    if (filters.status) {
      result = result.filter(task => task.status === filters.status);
    }
    if (filters.priority) {
      result = result.filter(task => task.priority === filters.priority);
    }
    setFilteredTasks(result);
  };

return (
  <div>
    <h1>Task Manager App</h1>
    <TaskFilter onFilterChange={handleFilterChange} />
    <TaskList 
      tasks={filteredTasks}
      onStatusChange={handleStatusChange}
      onDelete={handleDelete}
    />
  </div>
);
}

export default App;
