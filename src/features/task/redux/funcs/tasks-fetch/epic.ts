import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, flatMap, map, mergeMap, switchMap } from 'rxjs/operators'
import { ActionType, isActionOf } from 'typesafe-actions'
import { AppState } from '../../../../../common/root/reducers'
import Api from '../../../../../data/api/Api'
import * as actions from './actions'

type Action = ActionType<typeof actions>

const tasksFetchEpic: Epic<Action, Action, AppState> = (action$, store) => {
    return action$.pipe(
        filter(isActionOf(actions.fetchRequest)),
        mergeMap(() =>
            Api.getTasks().pipe(
                map((x) => actions.fetchSuccess(x.body)),
                catchError((e) => of(actions.fetchError(e))),
            ),
        ),
    )
}

export default [
    tasksFetchEpic,
]