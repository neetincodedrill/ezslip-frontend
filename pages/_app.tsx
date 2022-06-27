import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider  } from "@apollo/client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import client from '@client/index';



  
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>

    )
}

export default MyApp
