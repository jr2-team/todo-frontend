import ITask from '../../../data/models/Task'

export default interface ITasksState {
    readonly fetchingStatus: string,
    readonly tasks: ITask[],
    readonly error?: string,
}