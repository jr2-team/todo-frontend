import * as React from 'react'
import TaskList from './task/components/TaskList.connect'

export default class App extends React.Component {
    public render() {
        return (
            <TaskList />
        )
    }
}