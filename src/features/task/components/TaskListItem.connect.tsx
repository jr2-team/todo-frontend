import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAppState } from '../../../common/system/reducers'
import TaskActions from '../redux/funcs/TaskActions'
import { updateRequest } from '../redux/funcs/update-task/UpdateTaskActions'
import TaskListItem from './TaskListItem'

const mapStateToProps = (state: IAppState) => ({ })

const mapDispatchToProps = (dispatch: Dispatch<TaskActions>) => bindActionCreators({
        updateTask: updateRequest,
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem)