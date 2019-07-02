import { ActionType, createReducer } from 'typesafe-actions'
import ITaskState from '../../TasksState'
import InitialState from '../InitialState'
import * as actions from './FetchTaskActions'

type Actions = ActionType<typeof actions>

const fetchTaskReducer = createReducer<ITaskState, Actions>(InitialState)
    .handleAction(actions.fetchRequest, (s, _) => ({
        ...s,
        fetchingStatus: 'TASKS_FETCH_REQUEST',
    }))
    .handleAction(actions.fetchSuccess, (s, a) => ({
        ...s,
        fetchingStatus: 'TASKS_FETCH_SUCCESS',
        tasks: a.payload,
    }))
    .handleAction(actions.fetchError, (s, a) => ({
        ...s,
        fetchingStatus: 'TASKS_FETCH_ERROR',
        tasks: [],
        error: a.payload.message,
    }))

export default fetchTaskReducer