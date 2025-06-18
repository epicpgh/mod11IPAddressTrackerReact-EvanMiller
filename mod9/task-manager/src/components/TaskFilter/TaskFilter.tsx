import {useState} from 'react';

import { TaskFilterProps } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    const [status, setStatus] = useState<string | undefined> ();

    const handleFilter =( => {
        onFilterChange({
            status: status as any,
            priority: priority as any,
        });
        })

            return (
                <div>
                    {handleFilter}
                </div>
            );
        };
        
        export default TaskFilter;