import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {Post} from '../interfaces/posts'

const CardComponent = styled.div`
    display:flex;
    flex-direction:column;
    border: 2px solid black;
    margin:1vw;
    max-width:30vw;
    min-width:30vw;
    min-height:30vh;
    max-height:30vh;
    align-items:center;
`
const CardImg = styled.img`
    max-width:29.5vw;
    max-height:15vh;
`
const Title = styled.h2`

`
const Body = styled.p`

`


const Card  : React.FC<Post> = props => {
    const router = useRouter()
    const ToUpper = (str:string) :string => {
        return str[0].toUpperCase() + props.obj.body.slice(1).padStart(540, 'some text')
    } 

    return(
        <CardComponent>
            <CardImg src = {`${props.img}`}/>
            <Title>
                {props.obj.title ? props.obj.title[0].toUpperCase() + props.obj.title.slice(1) : null}
            </Title>
            <a onClick={() =>  {
                router.push({
                pathname: `/posts/[Post]`,
                query: {
                    Post: props.obj.id, 
                    title:props.obj.title, 
                    body: ToUpper(props.obj.body),
                    img: props.img
                }
                })
            }}>
                <Body>
                    {props.obj.body ? ToUpper(props.obj.body).slice(0,15) : null}
                </Body>
                </a>
        </CardComponent>
    )
}

export default Card