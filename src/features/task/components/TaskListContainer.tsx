import * as React from 'React'
import Api from '../../../data/api/Api'
import ITask from '../../../data/models/Task';
import { TaskList } from './TaskList'

interface IOwnProps { }

interface ITaskListContainerState {
    status: string,
    tasks: ITask[]
}

export default class TaskListContainer extends React.Component<IOwnProps, ITaskListContainerState> {
    constructor() {
        super({})
        this.state = {
            status: 'TASKS_FETCH',
            tasks: [],
        }
        const foo = this.state
        const bp = ''
    }

    public componentDidMount() {
        Api.getTasks().subscribe(
            (data) => {
                const tasks = data.body
                this.setState({
                    status: 'TASKS_FETCH_SUCCESS',
                    tasks,
                })
            },
            (error) => console.log(error),
        )
    }

    public render() {
        return (
            <TaskList status={this.state.status} tasks={this.state.tasks} />
        )
    }
}