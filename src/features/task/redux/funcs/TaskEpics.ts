import createTaskEpic from './create-task/CreateTaskEpic'
import fetchTaskEpic from './fetch-task/FetchTaskEpic'
import updateTaskEpic from './update-task/UpdateTaskEpic';

const tasksEpics = [
    createTaskEpic,
    fetchTaskEpic,
    updateTaskEpic,
]

export default tasksEpics