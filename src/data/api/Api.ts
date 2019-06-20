import ITask from '../models/Task'
import ApiClient from './ApiClient'

class ApiImpl {
    public getTask = async (id: number): Promise<ITask> => {
        const res = await ApiClient.get<ITask>(`tasks/${id}`)
        return res.result
    }

    public getTasks = async (): Promise<ITask[]> => {
        const res = await ApiClient.get<ITask[]>('tasks')
        return res.result
    }

    public createTask = async (task: ITask): Promise<ITask> => {
        const res = await ApiClient.create<ITask>('tasks', task)
        return res.result
    }

    public updateTask = async (id: number, task: ITask): Promise<ITask> => {
        const res = await ApiClient.update<ITask>(`tasks/${id}`, task)
        return res.result
    }

    public deleteTask = async (id: number): Promise<{}> => {
        const res = await ApiClient.delete(`tasks/${id}`)
        return res.result
    }
}

const Api = new ApiImpl()

export default Api