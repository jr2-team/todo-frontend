import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, map, switchMap, mergeMap } from 'rxjs/operators'
import { ActionType, isActionOf } from 'typesafe-actions'
import { IAppState } from '../../../../../common/system/reducers'
import Api from '../../../../../data/api/Api'
import * as actions from './actions'

type Action = ActionType<typeof actions>

const createTasksEpic: Epic<Action, Action, IAppState> = (action$) => {
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

const createTaskEpics = [
    createTasksEpic,
]

export default createTaskEpics