import { GET_POSTS, PostsActionType,Post } from './types'

export const GetPosts = (Posts : Post[]) : PostsActionType => {
    return{
        type:GET_POSTS,
        payload: Posts
    }
}
