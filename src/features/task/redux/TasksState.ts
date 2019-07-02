import ITask from '../../../data/models/Task'

export default interface ITaskState {
    readonly fetchingStatus: string,
    readonly tasks: ITask[],
    readonly error?: string,
}