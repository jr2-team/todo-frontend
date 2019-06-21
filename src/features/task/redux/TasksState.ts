import ITask from '../../../data/models/Task'

export default interface ITasksState {
    readonly status: string,
    readonly tasks: ITask[],
    readonly error?: string,
}