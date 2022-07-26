import React from "react";


export default function Question(props) {
    let choices = []
    props.type === "boolean" ? 
    choices = [props.answer, ...props.incorrect].sort().reverse() :
    choices = [props.answer, ...props.incorrect].sort() 

    // const entities = {
    //     '&#039;': "'",
    //     '&quot;': '"'
    // }

    let editedQuestion = props.question.replace('&quot;', '"')
    
    function clickHandler(value) {
        value === props.answer ? console.log('Correct!') :
        console.log("Wrong!")
    }


    const multipleChoice = choices.map(item => {
        return ( 
     
            <button
                className="quiz-btn"
                value={item}
                onClick={() => clickHandler(item)}
            >
                {item}
            </button>

       
        )
    }) 

    return (
        <div className="question-container">
            <h3 className="question">{editedQuestion}</h3>
            <div className="answers">
            {multipleChoice}
            </div>
        </div>
    )
}