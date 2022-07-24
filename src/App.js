import { useEffect } from "react";



function App() {
  useEffect(() => {
    function getTrivia() {
      fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data => console.log(data.results))
    }
    getTrivia()
  }, [])



  return (
    <div className="App">
     <h1>Hello world</h1>
    </div>
  );
}

export default App;
