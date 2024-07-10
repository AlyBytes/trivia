import "./ResultsPage.css";
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

  return (
    <div className="ResultsPage">
      <h1> You got {score} right answers!! </h1>
      <button className="Button" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}
