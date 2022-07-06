import { ApolloClient, InMemoryCache,HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
// const cookie = require('cookie-cutter')
import { getCookie } from 'cookies-next';

const httpLink = new HttpLink({ uri: "http://localhost:5000/ezslip"});
const authLink = setContext(async(req, {headers}) => {
    // const token = cookie.get('ezslipToken');
    const token = getCookie('ezslipToken');
    // console.log("tokenset",token)
    return {
        ...headers,
        headers : {
            Authorization : token ? token : null
        }
    }
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
    link : (link as any),
    cache : new InMemoryCache()
})

export default client;