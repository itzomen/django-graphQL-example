import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    HttpLink
  } from '@apollo/client'
  
  
  export default function newApolloClient (schema: string) {

    
    
    // const httpLink = new HttpLink({
    //   uri: "http://" + schema + "localhost:8000/graphql/",
    // });

    
    return new ApolloClient({
      // link: authLink.concat(httpLink),
      uri: "http://" + schema + "localhost:8000/graphql/",
      cache: new InMemoryCache(),
    //   credentials: 'include',
    })
  }