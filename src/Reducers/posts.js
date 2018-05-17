export function posts(state=[], action) {
  switch(action.type){
    case 'INCREMENT_LIKES' :
      let i = action.index
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1)
      ]
    case 'ADD_COMMENT' :
      i = action.postId
      const commentObject = {user: action.user, comment: action.comment}
      state[i].comments.push(commentObject)
      return [...state]
    case 'REMOVE_COMMENT' :
      i = action.i
      const postId = action.postId
      console.log(state, i, postId)
      console.log(state[postId].comments[i])
      state[postId].comments.splice(i, 1)
      return [...state]
    default :
     return state
  }
}
