import { createAction } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'

const enum CreateTaskActionTypes {
    CREATE_REQUEST = '@@tasks/CREATE_REQUEST',
    CREATE_SUCCESS = '@@tasks/CREATE_SUCCESS',
    CREATE_ERROR = '@@tasks/CREATE_ERROR',
}

export const createRequest = createAction(
    CreateTaskActionTypes.CREATE_REQUEST,
    (action) => (task: ITask) => action(task),
)

export const createSuccess = createAction(
    CreateTaskActionTypes.CREATE_SUCCESS,
    (action) => (task: ITask) => action(task),
)

export const createError = createAction(
    CreateTaskActionTypes.CREATE_ERROR,
    (action) => (error: Error) => action(error),
)