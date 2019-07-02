import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'

const enum UpdateTaskActionTypes {
    UPDATE_REQUEST = '@@tasks/UPDATE_REQUEST',
    UPDATE_SUCCESS = '@@tasks/UPDATE_SUCCESS',
    UPDATE_ERROR = '@@tasks/UPDATE_ERROR',
}

export const updateRequest = createAction(
    UpdateTaskActionTypes.UPDATE_REQUEST,
    (action) => (task: ITask) => action(task),
)

export const updateSuccess = createAction(
    UpdateTaskActionTypes.UPDATE_SUCCESS,
    (action) => (task: ITask) => action(task),
)

export const updateError = createAction(
    UpdateTaskActionTypes.UPDATE_ERROR,
    (action) => (error: Error) => action(error),
)