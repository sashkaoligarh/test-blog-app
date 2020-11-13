import React ,{useEffect, useState} from 'react'
import Head from 'next/head'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {postsApi} from './api/api'
import {PostsState} from '../redux/types'
import Link from 'next/link'
import styled from 'styled-components'
import BlogCard from '../Components/BlogCard'
import {Props} from '../interfaces/posts'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  min-width:100vw;
  align-items:center;
`
const Body = styled.div`
  display:flex;
  flex-direction:column;
  min-width:100vw;
  max-width:100vw;
  justify-content:center;
  align-items:center;

`
const Header = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:0;
  color:#ffff;
  position:absolute;
`
const HeaderText = styled.h2`
  color:#ffff;
  font-size:5vw;
  margin:0;
`
const HeaderLinks = styled.div`
  display:flex;
  flex-direction:row;

`
const ImgHead = styled.img` 
  width:100vw;
  height:30vh;
`
const Posts = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  max-width:75vw;
  align-items:center;
  justify-content:center;
`
const LinkHead = styled.a`
  margin:5vw;
  font-size:1.5vw;

`



const  Home :React.FC<Props>  = (props) => {
  const links = [
    {link:'/posts', text:'Ко всем постам'},
    {link:'/createPost', text:'Создать Пост'}]
  useEffect( () :void => {
    async function loadData() {
    let data :PostsState = await  postsApi.GetPostsList()
    console.log(data, 'data')
    await props.GetPosts(data)
    console.log(props)
    }
    loadData()
  },[])
  
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImgHead src={`710006.jpg`}/>
      <Header>
        <HeaderText>Blog</HeaderText>
        <HeaderLinks>
          {links.map((item, index) => (
            <Link key={index} href={`${item.link}`}>
              <LinkHead key={index}>{item.text}</LinkHead>
            </Link>
          ))}
        </HeaderLinks>
        
      </Header>
      <Body>
        <Posts>
          {props.posts.reverse().slice(0, 6).map(item => (
            <BlogCard key={item.id} obj={item} img={'/test.jpg'}/>
          ))}
        </Posts>
      </Body>
    </Container>
  )
}
const mapStateToProps = (state : PostsState) => ({
  posts: state.posts
  
})
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)