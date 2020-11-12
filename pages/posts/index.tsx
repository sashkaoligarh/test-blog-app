import styled from 'styled-components'
import React from 'react'
import {connect} from 'react-redux'
import {PostsState} from '../../redux/types'
import BlogCard from '../../Components/BlogCard'

import {bindActionCreators} from 'redux'
import * as actions from '../../redux/actions'
import Link from 'next/link'
import {Props} from '../../interfaces/posts'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    align-items:center;
` 
const Body = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:75vw;
    align-items:center;
    justify-content:center;
`
const LinkText = styled.a`
    margin:5vw;
    font-size:3vw;


`
const Posts : React.FC<Props> = (props) => {
    return(
        <Container>
            <Link href='/'><LinkText>На главную</LinkText></Link>
                <Body>
                {props.posts.reverse().map(item => (
                    <BlogCard key={item.id} obj={item} img={'/test.jpg'}/>
                ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts)