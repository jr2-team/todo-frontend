import * as React from 'React'
import ITask from '../../../data/models/Task'

interface ITaskListItemProps {
    task: ITask
}

const TaskListItem: React.FC<ITaskListItemProps> = (props: ITaskListItemProps) => {
    return (
        <p>{props.task.name} - {props.task.status}</p>
    )
}

export default TaskListItem