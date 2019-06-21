import { combineReducers } from 'redux'
import { tasksFetchReducer, tasksState } from '../../features/task/redux/funcs/tasks-fetch/reducer'
import { ITasksState } from '../../features/task/redux/funcs/tasks-fetch/types'

export type AppState = {
    tasks: ITasksState,
}

console.log(tasksFetchReducer)

export const appReducers = combineReducers({
    tasks: tasksFetchReducer,
})

export default appReducers