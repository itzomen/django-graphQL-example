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

    const client = useApolloClient();

    console.log("Client in context", client.link)
    console.log("Client in context", client.cache)


    // useEffect(() => {
     
    //     console.log('useeffect ran', schema)
        
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