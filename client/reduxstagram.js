import React from 'react'
import { render } from 'react-dom'

// import CSS
import css from './styles/style.styl'

// Import components
import Main from './components/main.js'
import Single from './components/single.js'
import PhotoGrid from './components/photo_grid.js'

// Import React Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// React Router variable. Build Router then add Routes. In this one, we're
// setting the default path "/" to the main component. IndexRoute just indicates
// a child component that will render with the previous path. Nested paths are
// what comes later. So /view/23423 will be render Main compoment with a Single
// component as a child, whereas ("/") will render Main component with a
// PhotoGrid child.
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
