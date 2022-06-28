import { ApolloClient, InMemoryCache,HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
const cookie = require('cookie-cutter')

const httpLink = new HttpLink({ uri: "http://localhost:5000/ezslip"});
const authLink = setContext(async(req, {headers}) => {
    const token = cookie.get('ezslipToken');
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