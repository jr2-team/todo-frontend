import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAppState } from '../../../common/system/reducers'
import { createRequest } from '../redux/funcs/create-task/CreateTaskActions'
import { fetchRequest } from '../redux/funcs/fetch-task/FetchTaskActions'
import TaskActions from '../redux/funcs/TaskActions'
import TaskList from './TaskList'

const mapStateToProps = (state: IAppState) => ({
    status: state.tasks.fetchingStatus,
    tasks: state.tasks.tasks,
    errorMessage: state.tasks.error,
})

const mapDispatchToProps = (dispatch: Dispatch<TaskActions>) => bindActionCreators({
        fetchTasks: fetchRequest,
        createTask: createRequest,
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)