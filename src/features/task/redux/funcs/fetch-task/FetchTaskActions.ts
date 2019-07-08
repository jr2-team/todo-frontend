import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'

const enum FetchTaskActionTypes {
    FETCH_REQUEST = '@@task/FETCH_REQUEST',
    FETCH_SUCCESS = '@@task/FETCH_SUCCESS',
    FETCH_ERROR = '@@task/FETCH_ERROR',
}

export const fetchRequest = createAction(FetchTaskActionTypes.FETCH_REQUEST)

export const fetchSuccess = createAction(
    FetchTaskActionTypes.FETCH_SUCCESS,
    (action) => (tasks: ITask[]) => action(tasks),
)

export const fetchError = createAction(
    FetchTaskActionTypes.FETCH_ERROR,
    (action) => (error: Error) => action(error),
)