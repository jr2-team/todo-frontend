import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ActionType } from 'typesafe-actions'
/**
 * Redux store setup
 */
import epics from './common/root/epics'
import reducers, { AppState } from './common/root/reducers'
import App from './features/App.connect'
import * as actions from './features/task/redux/funcs/tasks-fetch/actions'

type Action = ActionType<typeof actions>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
    }
}

const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose

const epicMiddleware = createEpicMiddleware<Action, Action, AppState>()

function configureStore(initialState?: AppState) {
    // configure middlewares
    const middlewares = [
        epicMiddleware,
    ]
    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    )
    // create store
    return createStore(
        reducers,
        initialState,
        enhancer,
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