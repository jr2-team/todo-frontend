import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'

const enum FetchTasksActionTypes {
    FETCH_REQUEST = '@@tasks/FETCH_REQUEST',
    FETCH_SUCCESS = '@@tasks/FETCH_SUCCESS',
    FETCH_ERROR = '@@tasks/FETCH_ERROR',
}

export const fetchRequest = createAction(FetchTasksActionTypes.FETCH_REQUEST)

export const fetchSuccess = createAction(
    FetchTasksActionTypes.FETCH_SUCCESS,
    (action) => (tasks: ITask[]) => action(tasks),
)

export const fetchError = createAction(
    FetchTasksActionTypes.FETCH_ERROR,
    (action) => (error: Error) => action(error),
)