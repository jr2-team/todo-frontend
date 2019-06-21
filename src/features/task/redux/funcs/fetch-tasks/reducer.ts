import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import ITasksState from '../../TasksState'
import InitialState from '../InitialState';
import * as actions from './actions'

type Action = ActionType<typeof actions>

const reducer: Reducer<ITasksState> = (
    state: ITasksState = InitialState,
    action: Action,
) => {
    switch (action.type) {
        case getType(actions.fetchRequest): {
            return {
                ...state,
                status: 'TASKS_FETCH',
            }
        }
        case getType(actions.fetchSuccess): {
            return {
                ...state,
                status: 'TASKS_FETCH_SUCCESS',
                tasks: action.payload,
            }
        }
        case getType(actions.fetchError): {
            return {
                ...state,
                status: 'TASKS_FETCH_ERROR',
                tasks: [],
                error: action.payload.message,
            }
        }
        default:
            return state
    }
}

export { reducer as tasksFetchReducer}