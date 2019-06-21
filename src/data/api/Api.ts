import ITask from '../models/Task'
import ApiClient from './ApiClient'

class ApiImpl {
    public getTask = (id: number) =>
        ApiClient.get<ITask>(`tasks/${id}`)

    public getTasks = () =>
        ApiClient.get<ITask[]>('tasks')

    public createTask = (task: ITask) =>
        ApiClient.create<ITask>('tasks', task)
}

const Api = new ApiImpl()

export default Api