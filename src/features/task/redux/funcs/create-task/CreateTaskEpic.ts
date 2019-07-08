import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, map, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { IAppState } from '../../../../../common/system/reducers'
import Api from '../../../../../data/api/Api'
import TaskActions from '../TaskActions'
import * as actions from './CreateTaskActions'

const createTaskEpic: Epic<TaskActions, TaskActions, IAppState> = (action$) => {
    return action$.pipe(
        filter(isActionOf(actions.createRequest)),
        mergeMap((action) =>
            Api.createTask(action.payload).pipe(
                map((x) => actions.createSuccess(x.body)),
                catchError((e) => of(actions.createError(e))),
            ),
        ),
    )
}

export default createTaskEpic