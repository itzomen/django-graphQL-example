import React, { useEffect } from "react";
import { useApolloClient, ApolloConsumer } from "@apollo/client"

import './home.page.css'

import { useSchema } from "../../components/app/Context"

import QuestionGrid from "../../components/question/question.component"
import { useGetQuestions } from "../../hooks/questions/useGetQuestions";
import client from "../../common/apollo-client";
import newApolloClient from "../../common/custom-client";


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

    // const withApolloClient = () => (
    //     <ApolloConsumer>
    //         {client => }
    //     </ApolloConsumer>
    // );

    // --------------------------------
    const myclient = newApolloClient(schema)

    useEffect(() => {
        
        console.log('useeffect ran', schema)
        // const myclient = newApolloClient(schema)
        console.log('tenant client', myclient.link)
        // return () => {
        //     cleanup
        // }
    }, [schema])

    
   
    


    return(
        <div className="home">
            <h2>Home</h2>
            <h3>
            {schema}
            <button onClick={() => setSchema("shop1.")} >SHOP1</button>
            <button onClick={() => setSchema("shop2.")} >SHOP2</button>
            </h3>
            <hr></hr>
            <QuestionGrid questions={questions || []}/>
        </div>
    );
}

export default Home