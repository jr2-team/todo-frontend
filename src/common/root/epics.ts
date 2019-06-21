import { combineEpics } from 'redux-observable'
import tasksEpics from '../../features/task/redux/funcs/tasks-fetch/epic'

const epics = combineEpics(
    ...tasksEpics,
)

export default epics