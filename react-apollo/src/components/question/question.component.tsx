import React from "react";
import { Question } from "../../common/interfaces/question.interface";
import QuestionItem from "./question-item/question-item"

interface QuestionProps {
    questions: Question[]
}

const QuestionGrid: React.FC <QuestionProps> = ({ questions }: QuestionProps ) => {
    return(
        <div className="question">
            {questions.map( question => (
                <div key={question.id}>
                    <QuestionItem question={ question } />
                </div>
            ))}
        </div>
    );
}

export default QuestionGrid