import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as io from 'socket.io-client'
import App from './common/App.connect'
import configureStore from './common/system/store'
import ITask from './data/models/Task'
import { fetchSuccess } from './features/task/redux/funcs/fetch-task/FetchTaskActions'

const store = configureStore()

// TODO: Put to own class
const socket = io('http://localhost:8080/sio/v1/tasks')
socket.connect()
socket.on('receiveTasks', (tasks: ITask[]) => {
    console.log(tasks)
    store.dispatch(fetchSuccess(tasks))
})

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'),
)