import { combineReducers } from 'redux'
import { tasksFetchReducer } from '../../features/task/redux/funcs/tasks-fetch/reducer'
import { ITasksState } from '../../features/task/redux/funcs/tasks-fetch/types'

export interface IAppState {
    tasks: ITasksState
}

export const appReducers = combineReducers({
    tasks: tasksFetchReducer,
})

export default appReducers