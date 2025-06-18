import {useState} from 'react';

import { TaskFilterProps, TaskItemProps, TaskPriority } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    const [status, setStatus] = useState<string | undefined>();
    const [priority, setPriority] = useState<string | undefined>();

    const handleFilter = () => {
        onFilterChange({
            status: status as TaskItemProps['task']['status'] | undefined,
            priority: priority as TaskPriority | undefined
        });
    };

    return (
        <div>
            
            <select value={status || ''} onChange={e => setStatus(e.target.value)}>
                <option value="">All Statuses</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
            </select>
            <select value={priority || ''} onChange={e => setPriority(e.target.value)}>
                <option value="">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default TaskFilter;