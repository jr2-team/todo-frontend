import ITask from '../../../../../data/models/Task'

export const enum TasksFetchActionTypes {
    FETCH_REQUEST = '@@tasks/REQUEST',
    FETCH_SUCCESS = '@@tasks/SUCCESS',
    FETCH_ERROR = '@@tasks/ERROR',
}

export interface ITasksState {
    readonly status: string,
    readonly tasks: ITask[],
    readonly error?: string,
}