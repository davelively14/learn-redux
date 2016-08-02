import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Import root reducer
import rootReducer from './reducers/index.js'

// Import data
import comments from './data/comments'
import posts from './data/posts'

// Create an object for the default data. Note, in ES6 you don't need to specify
// the name of the value if it's the same name as the key. In other words, just
// putting 'posts' is the same as putting 'posts: posts'.
const defaultState = {
  posts,
  comments
}

// Adds the Redux devtools to the store
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)


const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
