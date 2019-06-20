import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import { IAppState } from '../../../common/root/reducers'
import * as actions from '../redux/funcs/tasks-fetch/actions'

type Action = ActionType<typeof actions>

import { ITaskListProps, TaskList } from './TaskList'

interface OwnProps { }

const mapStateToProps = (state: IAppState) => ({
    status: state.tasks.status,
    tasks: state.tasks.tasks,
    errorMessage: state.tasks.error,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)