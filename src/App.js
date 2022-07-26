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
        let results = [...data.results].map(item => ({
          ...item,
          id: nanoid()
        }))
        
        setQuestions(results)
  
    })
  }
    const quiz = questions.map(item => {
      return (
        <Question 
          key={item.id}
          id={item.id}
          type={item.type}
          question={item.question}
          answer={item.correct_answer}
          incorrect={item.incorrect_answers}

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
      </div>
      }
    </div>
  );

}
export default App;
