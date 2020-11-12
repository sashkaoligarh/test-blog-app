export  interface Posts {
    id: number
    title: string
    body: string
    img:string
}

export interface Props {
    GetPosts({})
    posts: any
  }
export interface Data {
    title: string
    body: string
    id:number
    img:string
}
export interface Post {
    obj:{
    title: string
    body: string
    id:number
    }
    img:string
}