import React from "react";
import { Question } from "../../../common/interfaces/question.interface";



const QuestionItem: React.FC <{ question: Question }> = ({ question }: { question: Question }) => {
    return(
        <div className="question-item">
            <h2>Question-Item {question.id}</h2>
            <h2>{question.title}</h2>
            <h2>{question.quiz}</h2>
        </div>
    );
}

export default QuestionItem