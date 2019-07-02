import * as React from 'React'
import ITask from '../../../data/models/Task'

interface ITaskListItemStateProps {
    task: ITask
}

const TaskListItem: React.FC<ITaskListItemStateProps> = (props: ITaskListItemStateProps) => {
    const { name, status } = props.task

    return (
        <p>{name} - {status}</p>
    )
}

export default TaskListItem