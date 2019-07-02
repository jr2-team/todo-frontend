import { combineEpics } from 'redux-observable'
import createTaskEpics from '../../features/task/redux/funcs/create-task/epic'
import fetchTasksEpics from '../../features/task/redux/funcs/fetch-tasks/epic'

const epics = combineEpics(
    ...fetchTasksEpics,
    ...createTaskEpics,
)

export default epics