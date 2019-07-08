import { combineEpics } from 'redux-observable'
import tasksEpics from '../../features/task/redux/funcs/TaskEpics'

const epics = combineEpics(
    ...tasksEpics,
)

export default epics