import { Dispatch } from 'redux';
import Api from '../../../data/api/Api';
import ITask from '../../../data/models/Task'
import {
    Action,
    IActionTaskFetchError,
    IActionTaskFetchSuccess,
    IActionTasksFetch,
} from './actions'

export interface IFetchTasksState {
    status: string,
    tasks: ITask[],
    errorMessage?: string,
}

const dispatchFetchTasks = (): IActionTasksFetch => {
    return {
        type: 'TASKS_FETCH',
    }
}

const dispatchFetchTasksSuccess = (tasks: ITask[]): IActionTaskFetchSuccess => {
    return {
        type: 'TASKS_FETCH_SUCCESS',
        tasks,
    }
}

const dispatchFetchTasksError = (error: Error): IActionTaskFetchError => {
    return {
        type: 'TASKS_FETCH_ERROR',
        errorMessage: error.message,
    }
}

export const getTasks = () => (dispatch: Dispatch) => {
    dispatch(dispatchFetchTasks())
    return Api.getTasks()
        .then((tasks) => dispatch(dispatchFetchTasksSuccess(tasks)))
        .catch((error) => dispatch(dispatchFetchTasksError(error)))
}

export const fetchTasksReducer = (state: IFetchTasksState, action: Action): IFetchTasksState => {
    switch (action.type) {
        case 'TASKS_FETCH':
            return {
                ...state,
                status: 'LOADING',
                tasks: [],
            }
        case 'TASKS_FETCH_SUCCESS':
            return {
                ...state,
                status: 'LOADED',
                tasks: action.tasks,
            }
        case 'TASKS_FETCH_ERROR':
            return {
                ...state,
                status: 'ERROR',
                tasks: [],
                errorMessage: action.errorMessage,
            }
        default:
            return state
    }
}