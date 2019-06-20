import { action } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'
import { TasksFetchActionTypes } from './types'

export const fetchRequest = () => action(TasksFetchActionTypes.FETCH_REQUEST)
export const fetchSuccess = (tasks: ITask[]) =>
    action(TasksFetchActionTypes.FETCH_SUCCESS, { tasks })
export const fetchError = (message: string) =>
    action(TasksFetchActionTypes.FETCH_ERROR, { message })