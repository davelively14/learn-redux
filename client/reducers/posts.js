// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing Likes!")
      const i = action.index
      // Needs to return an entire array of posts, but with the post updated.
      // We use the ES6 spread crap again. In this case, it's like using Object.
      // assign.  So we slice the array up to the index, then add the indexed
      // state with an updated value for the likes key, and then slice in the
      // array after the index.
      return [
        ...state.slice(0,i), // before what we're updating, spread makes a copy
        {...state[i], likes: state[i].likes + 1}, // spread means Object.assign
        ...state.slice(i + 1) // after what we're updating, spread makes a copy
      ]
    default:
      return state
  }
}

export default posts
