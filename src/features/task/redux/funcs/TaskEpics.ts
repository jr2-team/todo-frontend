import createTaskEpic from './create-task/CreateTaskEpic'
import fetchTaskEpic from './fetch-task/FetchTaskEpic'

const tasksEpics = [
    fetchTaskEpic,
    createTaskEpic,
]

export default tasksEpics