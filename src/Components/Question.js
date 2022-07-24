import React from "react";

export default function Question(props) {
    let choices = [props.answer, ...props.incorrect].sort();
    

    const trueOrFalse = (
        <div className="answers">
        <button 
            className="quiz-btn"
            value={true}
            >
            True
            </button>
        <button
            className="quiz-btn"
            value={false}
        >
            False
        </button>
        </div>
    )

    const multipleChoice = choices.map(item => {
        return ( <div className="answers">
            <button
                className="quiz-btn"
                >
                {item}
            </button>

        </div>)
    }) 

    return (
        <div className="question">
        <h3>{props.question}</h3>
        {props.type === "boolean" ? trueOrFalse : multipleChoice}
        </div>
    )
}