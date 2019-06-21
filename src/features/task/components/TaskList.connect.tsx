import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import { AppState } from '../../../common/root/reducers'
import * as actions from '../redux/funcs/tasks-fetch/actions'

type Action = ActionType<typeof actions>

import TaskList, { ITaskListProps } from './TaskList'

interface OwnProps { }

const mapStateToProps = (state: AppState) => ({
    status: state.tasks.status,
    tasks: state.tasks.tasks,
    errorMessage: state.tasks.error,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => bindActionCreators({
    fetchTasks: () => actions.fetchRequest(),
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)