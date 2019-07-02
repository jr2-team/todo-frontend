import * as lodash from 'lodash'
import { ActionType, createReducer } from 'typesafe-actions'
import ITask from '../../../../../data/models/Task'
import ITaskState from '../../TaskState'
import InitialState from '../InitialState'
import * as actions from './UpdateTaskActions'

type Actions = ActionType<typeof actions>

const updateTaskReducer = createReducer<ITaskState, Actions>(InitialState)
    .handleAction(actions.updateRequest, (s, _) => s)
    .handleAction(actions.updateSuccess, (s, a) => ({
        ...s,
        // fetchingStatus: 'TASKS_FETCH_SUCCESS',
        // tasks: updateItem(a.payload, s.tasks),
    }))
    .handleAction(actions.updateError, (s, a) => ({
        ...s,
        error: a.payload.message,
    }))

const updateItem = (item: ITask, list: ITask[]) => {
    const idx = lodash.findIndex(list, (x) => x.id === item.id)
    const newList = lodash.clone(list)
    newList[idx] = item
    return newList
}

export default updateTaskReducer