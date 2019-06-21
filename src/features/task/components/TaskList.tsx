import * as React from 'React'
import ITask from '../../../data/models/Task'
import TaskListItem from './TaskListItem'

export interface ITaskListProps {
    status: string,
    tasks: ITask[],
    errorMessage?: string,
    fetchTasks: () => undefined,
}

export default class TaskList extends React.Component<ITaskListProps> {
    public componentWillMount() {
        this.props.fetchTasks()
    }

    public render() {
        return (
            <div>
                {this.fetchTasks(this.props)}
            </div>
        )
    }

    private fetchTasks = (props: ITaskListProps) => {
        switch (props.status) {
            case 'TASKS_FETCH':
                return <p>Loading tasks...</p>
            case 'TASKS_FETCH_SUCCESS':
                return (
                    <ul>
                        {props.tasks.map((task) =>
                            <li key={task.id}>
                                <TaskListItem 
                                    task={task}
                                />
                            </li>,
                        )}
                    </ul>
                )
            case 'TASKS_FETCH_ERROR':
                return <p>Error: {props.errorMessage}</p>
            default:
                return <p>Unknown status1</p>
        }
    }
}