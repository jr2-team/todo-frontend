
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import { AppState } from '../common/root/reducers'
import App from './App'
import * as actions from './task/redux/funcs/tasks-fetch/actions'

type Action = ActionType<typeof actions>

interface IOwnProps { }

const mapStateToProps = (state: AppState) => ({ })

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: IOwnProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)