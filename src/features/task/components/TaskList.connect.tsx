import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAppState } from '../../../common/system/reducers'
import TaskActions from '../redux/funcs/actions'

import { createRequest } from '../redux/funcs/create-task/actions';
import { fetchRequest } from '../redux/funcs/fetch-tasks/actions';
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