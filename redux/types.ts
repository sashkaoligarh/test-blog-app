export const GET_POSTS = 'GET_POSTS'
export  interface Post {
        id: number
        title: string
        body: string

}
export interface PostsState {
    posts: Post[]
}
export interface PostsStates {
    posts: Post[]
}


interface getPostsAction { 
    type: typeof GET_POSTS
    payload: Post[]
}
  
export type PostsActionType = getPostsAction