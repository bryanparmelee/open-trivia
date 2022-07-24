import { useEffect, useState } from "react";
import './App.css';


function App() {

  const [questions, setQuestion] = useState([])

  
    function getTrivia() {
      fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data => console.log(data.results))
    }




  return (
    <div className="App">
     {
      questions.length === 0
      ? <div className="start-quiz">
        <h1>Quizmasters</h1>
        <button
          className="start-btn"
          onClick={getTrivia}
        >Start Quiz</button>
      </div>
      : <h2>Hello world</h2>
      }
    </div>
  );
}

export default App;
