import React from "react";

import './home.page.css'

import QuestionGrid from "../../components/question/question.component"
import { Question } from "../../common/interfaces/question.interface"
import { useGetQuestions } from "../../hooks/questions/useGetQuestions";


const Home: React.FC = () => {

    // const questions: Question[] = [
    //     {
    //         id: 1,
    //         title: "Title 1",
    //         quiz: "Quiz 1",
    //     }
    // ];
    const questions = useGetQuestions();

    console.log('questions:',questions)


    return(
        <div className="home">
            <h2>Home</h2>
            <QuestionGrid questions={questions || []}/>
        </div>
    );
}

export default Home