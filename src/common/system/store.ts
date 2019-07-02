import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import TaskActions from '../../features/task/redux/funcs/TaskActions'
import epics from './epics'
import reducers, { IAppState } from './reducers'

const epicMiddleware = createEpicMiddleware<TaskActions, TaskActions, IAppState>()

const configureStore = (initialState?: IAppState) => {
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
    // run epic middleware
    epicMiddleware.run(epics)
    return store
}

export default configureStore