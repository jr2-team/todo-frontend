import * as React from 'React'
import ITask from '../../../data/models/Task'
import { TaskListItem } from './TaskListItem'

export interface ITaskListProps {
    status: string,
    tasks: ITask[],
    errorMessage?: string
}

export interface ITaskListState { }

export class TaskList extends React.Component<ITaskListProps, ITaskListState> {
    public render() {
        return (
            this.fetchTasks()
        )
    }

    private fetchTasks = () => {
        switch (this.props.status) {
            case 'TASKS_FETCH':
                return <p>Loading tasks...</p>
            case 'TASKS_FETCH_SUCCESS':
                return <ul>{this.renderTaskList}</ul>
            case 'TASKS_FETCH_ERROR':
                return <p>Error: {this.props.errorMessage}</p>;
            default:
                
        }
    }

    private renderTaskList = () => {
        this.props.tasks.map((task) =>
            <li key={task.id}><TaskListItem task={task}/></li>,
        )
    }
}