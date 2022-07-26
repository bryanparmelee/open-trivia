import React from "react";


export default function Question(props) {
    let choices = []
    props.type === "boolean" ? 
    choices = [props.answer, ...props.incorrect].sort().reverse() :
    choices = [props.answer, ...props.incorrect].sort() 

    function fixHTML(str) {
        const entity = {
            '&#039;': "'",
            '&quot;': '"',
            '&amp;': '&',
            '&atilde;': 'ã',
            '&ouml;': 'ö'
        }
        return str.replace(/&#039;|&quot;|&amp;|&atilde;|&ouml;/g, item => entity[item]);
   
    }
   

    let editedQuestion = fixHTML(props.question)
    let editedChoices = choices.map(item => fixHTML(item))
    
    function clickHandler(value) {
        value === props.answer ? console.log('Correct!') :
        console.log("Wrong!")
    }


    const multipleChoice = editedChoices.map(item => {
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
            <div className="divider"></div>
  
        </div>
    )
}