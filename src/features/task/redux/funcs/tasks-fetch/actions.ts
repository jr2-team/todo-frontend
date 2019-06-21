import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'
import { TasksFetchActionTypes } from './types'

export const fetchRequest = createAction(TasksFetchActionTypes.FETCH_REQUEST)
export const fetchSuccess = createAction(
    TasksFetchActionTypes.FETCH_SUCCESS,
    resolve => (tasks: ITask[]) => resolve(tasks),
)
export const fetchError = createAction(
    TasksFetchActionTypes.FETCH_ERROR,
    resolve => (error: Error) => resolve(error),
)