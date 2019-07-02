import * as React from 'React'
import ITask from '../../../data/models/Task'

interface ITaskListItemStateProps {
    task: ITask
}

interface ITaskListItemDispatcherProps {
    updateTask: (task: ITask) => void,
}

type TaskListItemProps = ITaskListItemStateProps & ITaskListItemDispatcherProps

export default class TaskListItem extends React.Component<TaskListItemProps> {
    public render() {
        const { name, status } = this.props.task

        return (
            <div>
                <p>{name} - {status}</p>
                <button onClick={this.onTaskUpdateStatusClick}>Change Status</button>
            </div>
        )
    }

    private onTaskUpdateStatusClick = () => {
        const { task } = this.props
        this.props.updateTask({
            id: task.id,
            name: task.name,
            status: task.status === 0 ? 1 : 0,
        })
    }
}