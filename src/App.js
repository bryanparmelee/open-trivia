import { useEffect, useState } from "react";
import './App.css';
import Question from "./Components/Question";
import { nanoid } from "nanoid"


function App() {

  const [questions, setQuestions] = useState([])

 

  function getTrivia() {
      fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())    
      .then(data => {
        let results = [...data.results].map(questionItem => ({
          ...questionItem,
          options: [questionItem.correct_answer, ...questionItem.incorrect_answers],
          id: nanoid(),
          selected: '',
          checked: false,      
        }))
        
        setQuestions(results)
   
  
    })
  }

  
  const selectHandler = (id, selection) => {
      // console.log(makeSelection);
      setQuestions(prevQuestions => prevQuestions.map(question => {
        return id === question.id ?
        {...question, selected: selection} :
        question
      }));
  }



  
    const quiz = questions.map(question => {
      return (
        <Question 
          key={question.id} 
          questionItem={question} 
          selectHandler={selectHandler}
        />
      )
   
    })


  return (
    <div className="App">
     {
      questions.length === 0
      ? 
      <div className="start-quiz">
        <h1>Quizmasters</h1>
        <button
          className="start-btn"
          onClick={getTrivia}
        >Start Quiz</button>
      </div>
      :
       <div className="quiz">
        {quiz}
        <button
            className="check-btn"
            // onClick={checkAnswers}
        >Submit Answers</button>
      </div>

      }
    </div>
  );

}
export default App;
