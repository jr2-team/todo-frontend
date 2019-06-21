import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'
import FetchTasksActionTypes from './FetchTasksActionType'

export const fetchRequest = createAction(FetchTasksActionTypes.FETCH_REQUEST)

export const fetchSuccess = createAction(
    FetchTasksActionTypes.FETCH_SUCCESS,
    resolve => (tasks: ITask[]) => resolve(tasks),
)
export const fetchError = createAction(
    FetchTasksActionTypes.FETCH_ERROR,
    resolve => (error: Error) => resolve(error),
)