import React from "react";

import './home.page.css'

import QuestionGrid from "../../components/question/question.component"
import { Question } from "../../common/interfaces/question.interface"


const Home: React.FC = () => {

    const questions: Question[] = [
        {
            id: 1,
            title: "Title 1",
            quiz: "Quiz 1",
        }
    ];
    return(
        <div className="home">
            <h2>Home</h2>
            <QuestionGrid questions={questions}/>
        </div>
    );
}

export default Home