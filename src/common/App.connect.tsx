
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import { IAppState } from './system/reducers'

import App from './App'

import * as actions from '../features/task/redux/funcs/TaskActions'

type Action = ActionType<typeof actions>

const mapStateToProps = (state: IAppState) => ({ })

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ })

export default connect(mapStateToProps, mapDispatchToProps)(App)