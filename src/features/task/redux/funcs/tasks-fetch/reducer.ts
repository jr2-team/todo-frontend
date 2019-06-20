import { ActionType, getType, Reducer } from 'typesafe-actions'
import * as actions from './actions'
import { ITasksState } from './types'

type Action = ActionType<typeof actions>

export const initialState: ITasksState = {
    status: false,
    tasks: [],
    error: undefined,
}

export const tasksFetchReducer: Reducer<ITasksState, Action> = (
    state: ITasksState = initialState,
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
                tasks: action.payload.tasks,
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
    }
}