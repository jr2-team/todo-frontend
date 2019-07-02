import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './common/App.connect'
import configureStore from './common/system/store'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'),
)