import * as lodash from 'lodash'
import { ActionType, createReducer } from 'typesafe-actions'
import ITasksState from '../../TasksState'
import TaskActions from '../actions'
import InitialState from '../InitialState'
import * as actions from './actions'

const reducer = createReducer<ITasksState, TaskActions>(InitialState)
    .handleAction(actions.createRequest, (s, _) => {
        console.log(`create request: ${_.payload}`)
        return s
    })
    .handleAction(actions.createSuccess, (s, a) => {
        console.log(`create success: ${a.payload}`)
        return {
            ...s,
            fetchingStatus: 'TASKS_FETCH_SUCCESS',
            tasks: createItem(a.payload, s.tasks),
        }
    })
    .handleAction(actions.createError, (s, a) => {
        console.log(`create error: ${a.payload}`)
        return {
            ...s,
            error: a.payload.message,
        }
    })

const createItem = <T>(item: T, list: T[]) => {
    const newList = lodash.clone(list)
    newList.push(item)
    return newList
}

export { reducer as taskCreateReducer }