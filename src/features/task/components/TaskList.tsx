import * as React from 'React'
import * as io from 'socket.io-client'
import ITask from '../../../data/models/Task'
import TaskListItem from './TaskListItem'

interface ITaskListStateProps {
    status: string,
    tasks: ITask[],
    errorMessage?: string,
}

interface ITaskListDispatchProps {
    fetchTasks: () => void,
    createTask: (task: ITask) => void,
}

export type Props = ITaskListStateProps & ITaskListDispatchProps

export default class TaskList extends React.Component<Props> {
    public componentDidMount() {
        const socket = io('http://localhost:8080/sio/v1/tasks')
        socket.connect()
        socket.on('receiveTasks', (tasks: ITask[]) => {
            console.log(tasks)
        })
        this.props.fetchTasks()
    }

    public render() {
        return (
            <div>
                {this.fetchTasks()}
            </div>
        )
    }

    private fetchTasks = () => {
        const {
            status,
            tasks,
            errorMessage,
        } = this.props

        switch (status) {
            case 'TASKS_FETCH_REQUEST':
                return <p>Loading tasks...</p>
            case 'TASKS_FETCH_SUCCESS':
                return (
                    <div>
                        <ul>
                            {tasks.map(this.renderTask)}
                        </ul>
                        <button onClick={this.onNewTaskClick}>
                            Add new task
                        </button>
                    </div>
                )
            case 'TASKS_FETCH_ERROR':
                return <p>Error: {errorMessage}</p>
            default:
                return <p>Unknown status</p>
        }
    }

    private onNewTaskClick = () => {
        console.log('on create clicked')
        this.props.createTask({
            id: 0,
            name: `new task ${Math.floor(Math.random() * Math.floor(1000))}`,
            status: 1,
        })
    }

    private renderTask = (task: ITask) =>
        <li key={task.id}><TaskListItem task={task} /></li>
}