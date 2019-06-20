import * as React from 'React'
import ITask from '../../../data/models/Task'
import TaskListItem from './TaskListItem'

export interface ITaskListProps {
    status: string,
    tasks: ITask[],
    errorMessage?: string
}


export class TaskList extends React.Component<ITaskListProps> {
    public render() {
        return (
            <>
            <p>!!!</p>
            <div>{this.fetchTasks()}</div>
            </>
        )
    }

    private fetchTasks = () => {
        switch (this.props.status) {
            case 'TASKS_FETCH':
                return <p>Loading tasks...</p>
            case 'TASKS_FETCH_SUCCESS':
                return <ul>
                    {this.props.tasks.map((task) =>
                        <li key={task.id}><TaskListItem task={task}/></li>,
                    )}
                </ul>
            case 'TASKS_FETCH_ERROR':
                return <p>Error: {this.props.errorMessage}</p>
            default:
                return <p>Unknown status1</p>
        }
    }

    private renderTaskList = () => {
        return 
    }
}