import { Epic } from 'redux-observable'
import { of } from 'rxjs'
import { catchError, filter, map, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { IAppState } from '../../../../../common/system/reducers'
import Api from '../../../../../data/api/Api'
import TaskActions from '../TaskActions'
import * as actions from './FetchTaskActions'

const fetchTaskEpic: Epic<TaskActions, TaskActions, IAppState> = (action$, store) => {
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

export default fetchTaskEpic