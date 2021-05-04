import React, { useEffect } from "react";
import { ApolloClient, InMemoryCache , gql, useQuery, useApolloClient } from "@apollo/client"

import './home.page.css'

import { useSchema } from "../../components/app/Context"

import QuestionGrid from "../../components/question/question.component"
import { useGetQuestions, GET_QUESTIONS } from "../../hooks/questions/useGetQuestions";
import client from "../../common/apollo-client";
import newApolloClient from "../../common/custom-client";
import { Question } from "../../common/interfaces/question.interface"
import { useState } from "react";


const Home: React.FC = () => {

    const questions = useGetQuestions();
    console.log('questions:',questions)
    
    const { schema, setSchema } = useSchema();
    console.log('start schema:', schema)

    // const myclient = useApolloClient();

    // const httpLink = createHttpLink({
    //     uri: 'http://127.0.0.1:8000/gr',
    // });

    // myclient.link = httpLink

    // my client is now set to the ApolloClient instance being usd
    // by the app configured using ApolloProvider
    // console.log('myclient:', myclient.link)

    // const { link, setLink } = useApolloClient();

    // console.log('client:', setLink)


    // function GetSchema(){
    //     const { schema } = useSchema();
    //     console.log('get ran, schema is :', schema);
    //     return schema;
    // }
    // const URL = GetSchema();


    // --------------------------------
    const myclient = newApolloClient(schema)


    // const qry = myclient.query({
    //     query: GET_QUESTIONS,
    // })

    // console.log("Query is", qry);

    // try {

    //     qry.then((response) => 

    //     {
    //         const { data, error, loading } = response

    //         console.log("Response data", response.data)
    //     }


    //     )
        
    // } catch (error) {
    //     qry.catch((err) => console.error(err))
    //     console.log("ERROR", error)
    // }

    //=---------------------------------------------

    // ------------------------------------------------

    const client = useApolloClient();

    console.log("Client in context", client.link)
    console.log("Client cache", client.cache)


    //------------------------------------------------

    

    

    // const { data } = useQuery(GET_QUESTIONS, { context: {clientName: "name"}});


    // const GetQuestions = (): Question[] | undefined => {
    //     const { data } = useQuery(GET_QUESTIONS, { client: tclient});
    //     return data?.allQuestions;
    // }

    // const data = GetQuestions() 

    // console.log("Query is", data);





    // useEffect(() => {
     
    //     console.log('useeffect ran', schema)
    //     // const myclient = newApolloClient(schema)
    //     console.log('tenant client', myclient.link)
        
    // }, [schema]);

    


    return(
        <div className="home">
            <h2>Home</h2>
            <h3>
            {schema}
            <button onClick={() => setSchema("shop1.")} >SHOP1</button>
            <button onClick={() => setSchema("shop2.")} >SHOP2</button>
            <button onClick={() => setSchema("")} >Public</button>
            </h3>
            <hr></hr>
            <QuestionGrid questions={questions || []}/>
        </div>
    );
}

export default Home