import React,{useEffect} from 'react'
import store from '../redux/store'
import {Provider} from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';



const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
        font-weight: 400;
        background: #EFEFF4;
    }
    a{
      text-decoration:none;
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
