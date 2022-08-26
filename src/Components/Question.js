import React, { useState } from "react";

import Answer from "./Answer";

import htmlParser from "../utils/html-parser";

const Question = ({ questionItem, selectHandler }) => {
    // const [answers, setAnswers] = useState([])
    // const [selected, setSelected] = useState("")
    const { id, type, question, options, selected } = questionItem;
    let sorted = []    
    if (type === "boolean") {
        sorted = options.sort().reverse();
   
    } else {
        sorted = options.sort();
    }
    

    let editedQuestion = htmlParser(question);


    // let editedChoices = temp.map(item => fixHTML(item))

    // const noBorder = {border: 'none'}
    // const selectedBorder = {border: '1px solid black'}
    // const correct = {backgoundColor: 'green'}
    // const wrong = {backgroundColor: 'red'}

    // const checkStyle = (item) => {
    //     const { checked, selected, answer} = props;
    //     if (!props.checked && props.selected === item) {
    //         return selectedBorder
    //     } else if (checked && (selected === answer)) {
    //         return correct
    //     } else if (checked && (selected !== answer)) {
    //         return wrong
    //     } else {
    //         return noBorder
    //     }
    // }
 
  
    const multipleChoice = sorted.map((item) => {
        return (  <Answer 
                    key={item} 
                    id={id}
                    option={item}
                    selectHandler={selectHandler}
                    selected={selected}     
                    /> )   
    }); 

    return (
        <div 
            className="question-container"
            key={id}
        >
            <h3 className="question">
                {editedQuestion}
            </h3>
            <div className="answers">
                {multipleChoice}
            </div>
            <div className="divider"></div>
  
        </div>
    )
}

export default Question;