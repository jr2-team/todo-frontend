import { ActionType } from 'typesafe-actions'
import * as createActions from '../funcs/create-task/actions'
import * as fetchActions from '../funcs/fetch-tasks/actions'

type TaskActions = ActionType<typeof createActions>
    | ActionType<typeof fetchActions>

export default TaskActions