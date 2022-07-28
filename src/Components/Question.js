import React, { useState } from "react";


export default function Question(props) {
    const [selected, setSelected] = useState("")
    let temp = []
    props.type === "boolean" ? 
    
    temp = [props.answer, ...props.incorrect].sort().reverse() :
    temp =[props.answer, ...props.incorrect].sort()

    //Move this to the App module //  

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
    let editedChoices = temp.map(item => fixHTML(item))

    const noBorder = {border: 'none'}
    const selectedBorder = {border: '1px solid black'}

    
    function selectHandler(value) {
        setSelected(value)
    }


    const multipleChoice = editedChoices.map(item => {
        return ( 
     
            <button
                className="quiz-btn"
                style={selected === item ? selectedBorder : noBorder}
                key={item}
                value={item}
                       
                onClick={() => selectHandler(item)}
            >
                {item}
            </button>

       
        )
    }) 

    return (
        <div 
            className="question-container"
            key={props.id}>
            <h3 className="question">{editedQuestion}</h3>
            <div className="answers">
            {multipleChoice}
            </div>
            <div className="divider"></div>
  
        </div>
    )
}