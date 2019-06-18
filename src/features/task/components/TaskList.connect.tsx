import { connect } from 'react-redux'
import { fetchTasksReducer, IFetchTasksState } from '../redux/reducer'
import { ITaskListProps, TaskList } from './TaskList'

const mapStateToProps = (state: IFetchTasksState): ITaskListProps => state

export default connect(mapStateToProps)(TaskList)