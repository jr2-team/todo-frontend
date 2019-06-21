import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ActionType } from 'typesafe-actions'
import App from './common/App.connect'
/**
 * Redux store setup
 */
import epics from './common/system/epics'
import reducers, { IAppState } from './common/system/reducers'
import * as actions from './features/task/redux/funcs/fetch-tasks/actions'

type Action = ActionType<typeof actions>
const epicMiddleware = createEpicMiddleware<Action, Action, IAppState>()

function configureStore(initialState?: IAppState) {
    // configure middlewares
    const middlewares = [
        epicMiddleware,
    ]
    // compose enhancers
    const enhancers = applyMiddleware(...middlewares)
    // create store
    return createStore(
        reducers,
        initialState,
        enhancers,
    )
}

const store = configureStore()

epicMiddleware.run(epics)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)