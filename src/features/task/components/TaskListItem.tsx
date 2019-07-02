import * as React from 'React'
import ITask from '../../../data/models/Task'

interface ITaskListItemStateProps {
    task: ITask
}

const TaskListItem: React.FC<ITaskListItemStateProps> = (props: ITaskListItemStateProps) => {
    const { name, status } = props.task

    return (
        <div>
            <p>{name} - {status}</p>
            <button>Change Status</button>
        </div>
    )
}

export default TaskListItem