import { ActionType } from 'typesafe-actions'
import * as createActions from './create-task/CreateTaskActions'
import * as fetchActions from './fetch-task/FetchTaskActions'
import * as updateActions from './update-task/UpdateTaskActions'

type TaskActions =
    ActionType<typeof createActions> |
    ActionType<typeof fetchActions> |
    ActionType<typeof updateActions>

export default TaskActions