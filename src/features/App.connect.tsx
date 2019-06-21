
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ActionType } from 'typesafe-actions'
import { IAppState } from '../common/system/reducers'

import App from './App'

import * as actions from './task/redux/funcs/fetch-tasks/actions'

type Action = ActionType<typeof actions>

interface IOwnProps { }

const mapStateToProps = (state: IAppState) => ({ })

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: IOwnProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)