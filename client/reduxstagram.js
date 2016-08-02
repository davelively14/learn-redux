// Note for imports: no curly brackets mean that it's a default, anything inside
// curly brackets are named imports.
import React from 'react'
import { render } from 'react-dom'

// import CSS
import css from './styles/style.styl'

// Import components
import App from './components/app.js'
import Single from './components/single.js'
import PhotoGrid from './components/photo_grid.js'

// Import React Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// history is a named export that we have to call inside curly brackets. The
// 'store' variable itself will take whatever the default is from store.js
import store, { history } from './store.js'

// React Router variable. Build Router then add Routes. In this one, we're
// setting the default path "/" to the main component. IndexRoute just indicates
// a child component that will render with the previous path. Nested paths are
// what comes later. So /view/23423 will render an App compoment with a Single
// component as a child, whereas ("/") will render an App component with a
// PhotoGrid child.
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
