import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { ITasksState, TasksFetchActionTypes } from './types'

type Action = ActionType<typeof actions>

export const tasksState: ITasksState = {
    status: 'TASKS_FETCH_SUCCESS',
    tasks: [],
}

const reducer: Reducer<ITasksState> = (
    state: ITasksState = tasksState,
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