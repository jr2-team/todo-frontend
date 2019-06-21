import { combineEpics } from 'redux-observable'
import FetchTasksEpic from '../../features/task/redux/funcs/fetch-tasks/epic'

const epics = combineEpics(
    ...FetchTasksEpic,
)

export default epics