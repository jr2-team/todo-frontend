import ITask from '../models/Task'
import ApiClient from './ApiClient'

class ApiImpl {
    public getTask = (id: number) =>
        ApiClient.get<ITask>(`tasks/${id}`)

    public getTasks = () =>
        ApiClient.get<ITask[]>('tasks')
}

const Api = new ApiImpl()

export default Api