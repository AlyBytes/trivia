import { nationalParkQuestions } from "./utils";
// import QuestionSection from "./QuestionSection";
import NavButton from "./NavButton";
import { randomThree } from "./utils";
import { useEffect, useState } from "react";
import Question from "./Question";
import AnswerButton from "./AnswerButton";
import AnswerSection from "./AnswerSection";

export default function TriviaCard({ aList, onFinish }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersFromUser, setAnswersFromUser] = useState(
    Array(aList.length).fill("")
  );
  const [isAnswered, setIsAnswered] = useState(false);

  const usersAnswers = (e) => {
    // e.preventDefault();
    if (!isAnswered) {
      answersFromUser[questionIndex] = e.target.innerText;

      // setAnswersFromUser(!answersFromUser[questionIndex] && ((prevAnswersFromUser) => [ ...prevAnswersFromUser]));
      setAnswersFromUser((prevAnswersFromUser) => [...prevAnswersFromUser]);
      console.log(answersFromUser);
      setIsAnswered(true);
    }
  };
  // const [showResults, setShowResults] = useState(false);
  // const [answerButtons, setAnswerButtons] = useState([]);
  // define event handlers
  const goBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
      setAnswered(false);
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

  // setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  // determine if on the first question or not
  const onFirstQuestion = questionIndex === 0;
  // const onLastQuestion = questionIndex === aList.length - 1;

  // useEffect(() => {
  //   if (aList.length > 0) {
  // const currentQuestion = aList[questionIndex];
  // const isInRandomList = randomThree();
  //     // console.log(isInRandomList);
  //     const filteredList = aList.filter((park) =>
  //       isInRandomList.includes(park.id)
  //     );

  //     const answerButtons = [
  //       ...filteredList.map((park) => ({ id: park.id, answer: park.answer })),
  //       { id: currentQuestion.id, answer: currentQuestion.answer },
  //     ].slice(0, 4);
  //     setAnswerButtons(answerButtons);
  //   }
  // }, [questionIndex, aList]);

  // const [score, setScore] = useState(0);
  // const userChoice = (e) => {
  //   e.target.innerText === currentQuestion.answer &&
  //     setScore((score) => score + 1);
  //   // } else {
  //   //   setScore(score);
  //   // }
  // };

  // const [answersFromUser, setAnswersFromUser] = useState(
  //   Array(aList.length).fill("")
  // );
  // const usersAnswers = (e) => {
  //   // e.preventDefault();
  //   answersFromUser[questionIndex]=e.target.innerText
  //   // setAnswersFromUser(!answersFromUser[questionIndex] && ((prevAnswersFromUser) => [ ...prevAnswersFromUser]));
  //   setAnswersFromUser((prevAnswersFromUser) => [ ...prevAnswersFromUser])
  //   console.log(answersFromUser);
  // };

  // const currentQuestion = aList[questionIndex];
  // const isInRandomList = randomThree();
  // const filteredList = aList
  //   .filter((park) => isInRandomList.includes(park.id))
  //   .map((park) => ({ id: park.id, answer: park.answer }))
  //   .concat({ id: currentQuestion.id, answer: currentQuestion.answer });

  //   .slice(0, 4);
  // const filteredList = aList.filter((park) => randomThree.includes(park.id));

  // const answerButtons = [
  //   ...filteredList.map((park) => ({ id: park.id, answer: park.answer })),
  //   { id: currentQuestion.id, answer: currentQuestion.answer },
  // ];

  return (
    <main>
      <span>
        {aList.map((park, i) => {
          return (
            questionIndex === i && (
              <Question key={i} id={i + 1} question={park.question} />
            )
          );
        })}
      </span>
      {/* <h1>{score}</h1> */}
      <span>
        {/* {filteredList.map((park, i) => {
          return (
            <AnswerButton
              key={i}
              // clickAnswer={userChoice}
              clickAnswer={usersAnswers}
              // clickAnswer={e=>{e.preventDefault();{usersAnswers}}}
              answer={park.answer}
            />
          );
        })} */}
        <AnswerSection
          listOfParks={aList}
          usersAnswers={usersAnswers}
          idx={questionIndex}
          disabled = {isAnswered}
        />
      </span>

      {/* <div>
        <AnswerSection listOfParks={nationalParkQuestions} />
      </div>  */}
      <div>
        {" "}
        <NavButton
          clickFunc={goBack}
          disabled={onFirstQuestion}
          label="Back"
        />{" "}
      </div>
      <div>
        {" "}
        <NavButton
          clickFunc={goToNext}
          /* disabled={onLastQuestion} */
          label="Next"
        />{" "}
      </div>
    </main>
  );
}
