import React,{useEffect} from 'react'
import store from '../redux/store'
import {Provider} from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';



const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500');
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background: #EFEFF4;
    }
    a{
      &:hover{
    color:red;
    cursor: pointer
  }
  
    }
`;


const MyApp = ({ Component , pageProps}: AppProps) => {
  return(
    <>
    <GlobalStyles/>
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
