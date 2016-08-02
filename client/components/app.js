import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators.js'
import Main from './main.js'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// Tgus us where we bind all of the actions to the DOM
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// docs:
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// mapStateToProps: this function will be called any time the state updates
//   within the store. The state will be passed to the callback function.
// mapDispatchToProps: Send an object of functions and injects dispatch.
//
// The (Main) part is the component with which we're connecting the store. Now,
// to call a connected Main, we would inject the App component instead. The Main
// will be rendered, however.
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
