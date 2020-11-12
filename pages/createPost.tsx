import Link from 'next/link'
import styled from 'styled-components'
import {useState} from 'react'
import {postsApi} from './api/api'
import { Router } from 'next/router'
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const TitleInput = styled.input`
    width:20vw;
    height:5vh;
    margin:1vw;
    font-size:2vw;
`
const BodyInput = styled.input`
    width:50vw;
    height:20vh;
    margin:1vw;
    font-size:2vw;
    flex-wrap:wrap;
`
const Button = styled.input`
    height:4vh;
    width:8vw;
`
const Linked = styled.a`
    margin:5vw;
    font-size:2vw;

`

const NewPost: React.FC = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const SendPost = () => {
        console.log('sendPost');
        let post = {
            id:Date.now(),
            title,
            body,
            
        }
        postsApi.CreatePost(post)
    }


    return (
        <>
            <Link href='/'><Linked>На главную</Linked></Link>
            <Container>
                <h2>Введите заголовок</h2>
                <TitleInput value={title} onChange={e => setTitle(e.target.value)} placeholder='Заголовок' />
                <h2>Введите текст поста</h2>
                <BodyInput value={body} onChange={e => setBody(e.target.value)} placeholder='Текст поста' />
                <Link href='/'>
                    <Button type = 'submit' value = 'Отправить' onClick={() => SendPost()} />
                </Link>
            </Container>
        </>
    )
}

export default NewPost