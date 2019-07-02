import { ActionType } from 'typesafe-actions'
import * as createActions from './create-task/CreateTaskActions'
import * as fetchActions from './fetch-task/FetchTaskActions'

type TaskActions =
    ActionType<typeof createActions>
    | ActionType<typeof fetchActions>

export default TaskActions