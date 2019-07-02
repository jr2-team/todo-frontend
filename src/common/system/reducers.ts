import { combineReducers } from 'redux'
import tasksReducers from '../../features/task/redux/funcs/TaskReducer';
import ITaskState from '../../features/task/redux/TasksState'

export interface IAppState {
    tasks: ITaskState,
}

export const appReducers = combineReducers({
    tasks: tasksReducers,
})

export default appReducers