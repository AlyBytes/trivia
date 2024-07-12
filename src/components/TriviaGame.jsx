import { useState } from "react";
import { nationalParkQuestions } from "../utils";
import StartPage from "./StartPage";
import TriviaCard from "./TriviaCard";
import ResultsPage from "./ResultsPage";

const TriviaGame = () => {
  const [gameStage, setGameStage] = useState("intro"); // 'intro', 'game', 'results'
  const [userAnswers, setUserAnswers] = useState([]);

  const handleStartGame = () => {
    setGameStage("game");
  };

  const handleGameFinish = (userAnswers) => {
    setUserAnswers(userAnswers);
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
        <ResultsPage
          userAnswers={userAnswers}
          listOfParks={nationalParkQuestions}
          playAgain={resetGame}
        />
      )}
    </div>
  );
};

export default TriviaGame;
