import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import App from './App'
import Actions from './system/actions'
import { IAppState } from './system/reducers'

const mapStateToProps = (state: IAppState) => ({ })

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({ })

export default connect(mapStateToProps, mapDispatchToProps)(App)