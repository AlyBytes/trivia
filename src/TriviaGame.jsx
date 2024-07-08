import { useState } from "react";
import { nationalParkQuestions } from "./utils";
import StartPage from "./StartPage";
import TriviaCard from "./TriviaCard";
import ResultsPage from "./ResultsPage";
import AnswerSection from "./AnswerSection";

const TriviaGame = () => {
  const [gameStage, setGameStage] = useState("intro"); // 'intro', 'game', 'results'
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartGame = () => {
    setGameStage("game");
  };

  const handleGameFinish = (userAnswers) => {
    // Calculate score based on selectedOptions
    // const calculatedScore = userAnswers.reduce((acc, answer, idx) => {
    //   if (answer === aList[idx].answer) {
    //     return acc + 1;
    //   }
    //   return acc;
    // }, 0);
    setUserAnswers(userAnswers);
    // setScore(calculatedScore);
    setGameStage("results");
  };
  const resetGame = () => {
    setGameStage("intro");
    setUserAnswers([]);
  };
  return (
    <div>
      {gameStage === "intro" && <StartPage onStart={handleStartGame} />}
      {gameStage === "game" && (
        <TriviaCard onFinish={handleGameFinish} aList={nationalParkQuestions} />
      )}
      {gameStage === "results" && (
        <ResultsPage userAnswers ={userAnswers} listOfParks={nationalParkQuestions} playAgain={resetGame}
        /*   finalScore={score} totalQuestions={quizData.length} */
        />
      )}
    </div>
  );
};

export default TriviaGame;
