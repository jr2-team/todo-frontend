import { Action } from 'redux'
import ITask from '../../../data/models/Task'

export interface IActionTasksFetch extends Action {
    type: 'TASKS_FETCH'
}

export interface IActionTaskFetchSuccess extends Action {
    type: 'TASKS_FETCH_SUCCESS',
    tasks: ITask[]
}

export interface IActionTaskFetchError extends Action {
    type: 'TASKS_FETCH_ERROR',
    errorMessage: string
}

export type Action = IActionTasksFetch | IActionTaskFetchSuccess | IActionTaskFetchError