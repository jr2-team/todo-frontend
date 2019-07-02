import { ActionType, createReducer } from 'typesafe-actions'
import ITasksState from '../../TasksState'
import TaskActions from '../actions';
import InitialState from '../InitialState'
import * as actions from './actions'

type Action = ActionType<typeof actions>

const reducer = createReducer<ITasksState, TaskActions>(InitialState)
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

export { reducer as tasksFetchReducer}