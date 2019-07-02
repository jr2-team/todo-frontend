import ITask from '../models/Task'
import ApiClient from './ApiClient'

class ApiImpl {
    public getTask = (id: number) =>
        ApiClient.get<ITask>(`tasks/${id}`)

    public getTasks = () =>
        ApiClient.get<ITask[]>('tasks')

    public createTask = (task: ITask) =>
        ApiClient.create('tasks', task)

    public updateTask = (task: ITask) =>
        ApiClient.update(`tasks/${task.id}`, task)
}

const Api = new ApiImpl()

export default Api