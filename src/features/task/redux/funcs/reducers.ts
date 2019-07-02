import { taskCreateReducer } from '../funcs/create-task/reducer'
import { tasksFetchReducer } from '../funcs/fetch-tasks/reducer'
import TaskActions from './actions'
import InitialState from './InitialState'

const tasksReducers = [
    tasksFetchReducer,
    taskCreateReducer,
]

export default function reducer(state = InitialState, action: TaskActions) {
    let newState
    switch (action.type) {
        default:
            newState = state
            break
    }
    return tasksReducers.reduce((s, r) => r(s, action), newState)
}