import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ActionType } from 'typesafe-actions'
import * as actions from '../../features/task/redux/funcs/fetch-tasks/actions'
import epics from './epics'
import reducers, { IAppState } from './reducers'

type Action = ActionType<typeof actions>
export const epicMiddleware = createEpicMiddleware<Action, Action, IAppState>()

export const configureStore = (initialState?: IAppState) => {
    // configure middleware
    const middleware = [
        epicMiddleware,
    ]
    // compose enhancers
    const enhancers = applyMiddleware(...middleware)
    // create store
    const store =  createStore(
        reducers,
        initialState,
        enhancers,
    )
    console.log(initialState)
    // run epic middleware
    epicMiddleware.run(epics)
    return store
}