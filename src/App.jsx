import { useState } from "react";
import "./App.css";
import { nationalParkQuestions } from "./utils";
import TriviaCard from "./TriviaCard";
import TriviaGame from "./TriviaGame";
import ResultsPage from "./ResultsPage";
import AnswerSection from "./AnswerSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <span><Question id={questionIndex + 1} /></span>  */}
      <div>
        {/* <TriviaCard aList={nationalParkQuestions} /> */}
        <TriviaGame />
        {/* <ResultsPage finalScore={AnswerSection.score}/> */}
      </div>
      {/* <div>
        <AnswerSection listOfParks={nationalParkQuestions} />
      </div> */}

      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
