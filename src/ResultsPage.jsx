import AnswerSection from "./AnswerSection";

export default function ResultsPage({ userAnswers, listOfParks, playAgain }) {
  const calculateScore = () => {
    let score = 0;
    listOfParks.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return <div>
   <h1> Here are your RESULTS: {score}</h1> 
   <button onClick={playAgain}>Play Again</button>
{/* <p> {answersFromUser}</p> */}
    </div>;
}
