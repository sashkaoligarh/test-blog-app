import styled from 'styled-components'
import React from 'react'
import { Post } from '../../redux/types'
import { useRouter } from 'next/router'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
` 
const IMG = styled.img`
    width:50vw;
    height:50vh;
`
const Block = styled.div`
    display:flex;
    flex-direction:column;
    max-width:70vw;
    justify-content:center;
    align-items:center;
`
const Text = styled.p`
    font-size:1.5vw;
`
const Title = styled.h1`
    font-size:2vw;
`
const LinkA = styled.a`
    margin:5vw;
    font-size:2.5vw;

`

const Posts : React.FC<Post> = () => {

    const router = useRouter()
    const { title, body, img } = router.query
    return(
        <>
            <LinkA onClick={() => router.back()}>Вернуться назад</LinkA>
            <Container>
                <Block>
                    <Title>{title[0].toUpperCase() + title.slice(1)}</Title>
                    <IMG src = {`${img}`}/>
                    <Text>{body[0].toUpperCase() + body.slice(1)}</Text>
                </Block>
            </Container>
        </>
    )
}

export default Posts