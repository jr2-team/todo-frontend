import { combineReducers } from 'redux'
import { tasksFetchReducer } from '../../features/task/redux/funcs/fetch-tasks/reducer'
import ITasksState from '../../features/task/redux/TasksState'

export interface IAppState {
    tasks: ITasksState,
}

export const appReducers = combineReducers({
    tasks: tasksFetchReducer,
})

export default appReducers