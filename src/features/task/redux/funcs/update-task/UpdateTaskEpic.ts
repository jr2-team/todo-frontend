import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, map, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { IAppState } from '../../../../../common/system/reducers'
import Api from '../../../../../data/api/Api'
import TaskActions from '../TaskActions'
import * as actions from './UpdateTaskActions'

const updateTaskEpic: Epic<TaskActions, TaskActions, IAppState> = (action$, store) => {
    return action$.pipe(
        filter(isActionOf(actions.updateRequest)),
        mergeMap((action) => {
            return Api.updateTask(action.payload).pipe(
                map((response) => actions.updateSuccess(response.body)),
                catchError((error: Error) => of(actions.updateError(error))),
            )},
        ),
    )
}

export default updateTaskEpic