import ITasksState from '../TasksState'

const InitialState: ITasksState = {
    fetchingStatus: 'TASKS_FETCH_REQUEST',
    tasks: [],
}

export default InitialState