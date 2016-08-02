import React from 'react'
import Photo from './photo.js'

// this.props.posts.map((post, i) => <Photo />) creates an instance of our
// Photo component for every post.
// Note the ES6 spread operator, which we can read about here:
// http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
// Note that we needed to include a plugin for Babel in order for this to work.
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
})

export default PhotoGrid
