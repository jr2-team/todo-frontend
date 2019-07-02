import ITaskState from '../TaskState'

const InitialState: ITaskState = {
    fetchingStatus: 'TASKS_FETCH_REQUEST',
    tasks: [],
}

export default InitialState