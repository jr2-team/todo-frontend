import * as lodash from 'lodash'
import { ActionType, createReducer } from 'typesafe-actions'
import ITaskState from '../../TaskState'
import InitialState from '../InitialState'
import * as actions from './CreateTaskActions'

type Actions = ActionType<typeof actions>

const createTaskReducer = createReducer<ITaskState, Actions>(InitialState)
    .handleAction(actions.createRequest, (s, _) => s)
    .handleAction(actions.createSuccess, (s, a) => ({
        ...s,
        // fetchingStatus: 'TASKS_FETCH_SUCCESS',
        // tasks: createItem(a.payload, s.tasks),
    }))
    .handleAction(actions.createError, (s, a) => ({
        ...s,
        error: a.payload.message,
    }))

const createItem = <T>(item: T, list: T[]) => {
    const newList = lodash.clone(list)
    newList.push(item)
    return newList
}

export default createTaskReducer