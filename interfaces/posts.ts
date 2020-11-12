export  interface Posts {
    id: number
    title: string
    body: string
}

export interface Props {
    GetPosts({})
    posts: any
  }

export interface Post {
    obj:{
    title: string
    body: string
    id:number
    }
    img:string
}