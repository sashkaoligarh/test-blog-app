import {Post} from '../../redux/types'
import axios from 'axios';


const instance = axios.create({
  baseURL:'https://simple-blog-api.crew.red/'
})

export const postsApi = {
  GetPostsList(){
    console.log('api')
     return instance.get(`posts`)
     .then(response => response.data)
     .catch(e => console.log(e))
  },
  CreatePost(post: Post){
    return instance.post(`posts`, post)
    .then(response => console.log(response))
    .catch(e => console.log(e))
  },
}