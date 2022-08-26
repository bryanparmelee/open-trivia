import { useEffect, useState } from "react";
import './App.css';
import Question from "./Components/Question";
import { nanoid } from "nanoid"


function App() {

  const [questions, setQuestions] = useState([]);
  const [numberCorrect, setNumberCorrect] = useState(0);

 

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
          correct: false      
        }))
        
        setQuestions(results)
   
  
    })
  }

  
  const selectHandler = (id, selection) => {
      setQuestions(prevQuestions => prevQuestions.map(question => {
        return id === question.id ?
        {...question, selected: selection} :
        question
      }));
  }

  const checkAnswers = () => {
    setQuestions(prev => prev.map((question) => {
      const { selected, correct_answer, checked, correct } = question;
      return selected === correct_answer ? 
      {...question, checked: true, correct: true} :
      {...question, checked: true}
    }))

  
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
            onClick={checkAnswers}
        >Submit Answers</button>
      </div>

      }
    </div>
  );

}
export default App;
