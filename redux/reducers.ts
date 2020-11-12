import {PostsState, GET_POSTS, PostsActionType} from './types'

const initialState: PostsState = {
  posts: [],
}

export function reducer(
  state = initialState,
  action: PostsActionType
): PostsState {
  switch (action.type) {
    case GET_POSTS: {
      return {
        posts: action.payload,
      }
    }
    default:
      return state
  }
}