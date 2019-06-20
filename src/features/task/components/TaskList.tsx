import * as React from 'React'
import ITask from '../../../data/models/Task'
import TaskListItem from './TaskListItem'

export interface ITaskListProps {
    status: string,
    tasks: ITask[],
    errorMessage?: string
}

export const TaskList: React.SFC<ITaskListProps> = (state) => {
    return (
        <>
            <div>
                {fetchTasks(state)}
            </div>
        </>
    )
}

const fetchTasks = (state: ITaskListProps) => {
    switch (state.status) {
        case 'TASKS_FETCH':
            return <p>Loading tasks...</p>
        case 'TASKS_FETCH_SUCCESS':
            return <ul>
                {state.tasks.map((task) =>
                    <li key={task.id}><TaskListItem task={task}/></li>,
                )}
            </ul>
        case 'TASKS_FETCH_ERROR':
            return <p>Error: {state.errorMessage}</p>
        default:
            return <p>Unknown status1</p>
    }
}