import * as React from 'react'
import TaskList from '../features/task/components/TaskList.connect'

export interface IAppProps { }

export default class App extends React.Component<IAppProps, {}> {
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