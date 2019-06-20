import * as React from 'react'
import TaskList from '../features/task/components/TaskList.connect'

export interface AppProps {
}

export default class App extends React.Component<AppProps, {}> {
  public render() {
    return (
      <div className='app'>
        <div className='main'>
            <TaskList />
        </div>
      </div>
    )
  }
}