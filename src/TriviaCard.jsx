import NavButton from "./NavButton";
import { useState } from "react";
import Question from "./Question";
import AnswerSection from "./AnswerSection";
import "./TriviaCard.css"
import "./NavigationArrow.css"


export default function TriviaCard({ aList, onFinish }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersFromUser, setAnswersFromUser] = useState(
    Array(aList.length).fill("")
  );
  const [isAnswered, setIsAnswered] = useState(false);

  const usersAnswers = (e) => {
    if (!isAnswered) {
      answersFromUser[questionIndex] = e.target.innerText;
      setAnswersFromUser((prevAnswersFromUser) => [...prevAnswersFromUser]);
      console.log(answersFromUser);
      setIsAnswered(true);
    }
  };

  // define event handlers
  const goBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
      setIsAnswered(false);
    }
  };
  const goToNext = () => {
    if (questionIndex < aList.length - 1) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      setIsAnswered(false);
    } else {
      onFinish(answersFromUser);
    }
  };

  const onFirstQuestion = questionIndex === 0;

  return (
    <main className="Container">
      <span>
        {aList.map((park, i) => {
          return (
            questionIndex === i && (
              <Question key={i} id={i + 1} question={park.question} />
            )
          );
        })}
      </span>

      <span>
        <AnswerSection
          listOfParks={aList}
          usersAnswers={usersAnswers}
          idx={questionIndex}
          disabled={isAnswered}
        />
      </span>
      <span className="NavigationSection">
        <div className="NavigationArrow">
        {" "}
        <NavButton
          clickFunc={goBack}
          disabled={onFirstQuestion}
          label="Back"
        />{" "}
      </div>
      <div className="NavigationArrow">
        {" "}
        <NavButton clickFunc={goToNext} label="Next" />{" "}
      </div>
      </span>
      
    </main>
  );
}
