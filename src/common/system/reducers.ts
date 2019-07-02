import { combineReducers } from 'redux'
import tasksReducers from '../../features/task/redux/funcs/reducers';
import ITasksState from '../../features/task/redux/TasksState'

export interface IAppState {
    tasks: ITasksState,
}

// TODO: Fix global
export const appReducers = combineReducers({
    tasks: tasksReducers,
})

export default appReducers