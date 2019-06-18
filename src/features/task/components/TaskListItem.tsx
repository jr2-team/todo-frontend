import * as React from 'React'
import ITask from '../../../data/models/Task'

interface ITaskListItemProps {
    task: ITask
}

interface ITaskListState { }

export class TaskListItem extends React.Component<ITaskListItemProps, ITaskListState> {
    public render() {
        return (
            <p>{this.props.task.name} - {this.props.task.status}</p>
        )
    }
}