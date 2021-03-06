import createTaskReducer from './create-task/CreateTaskReducer'
import fetchTaskReducer from './fetch-task/FetchTaskReducer'
import InitialState from './InitialState'
import updateTaskReducer from './update-task/UpdateTaskReducer'

const tasksReducers = [
    createTaskReducer,
    fetchTaskReducer,
    updateTaskReducer,
]

// TODO: Fix any
export default function taskReducer(state = InitialState, action: any) {
    let newState
    switch (action.type) {
        default:
            newState = state
            break
    }
    return tasksReducers.reduce((s, r) => r(s, action), newState)
}