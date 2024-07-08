import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
// import { randomNum } from "./utils";
import { randomThree } from "./utils";
import NavButton from "./NavButton";
// export default function AnswerSection({ listOfParks, listOfNums }) {
//   const filteredParks = listOfParks.filter((park, i) => {
//     listOfNums.filter((num) => {
//       return park.id === num;
//     });
//     // return listOfNums.includes(park.id);
//     return park.id==listOfNums[0];
//   });

export default function AnswerSection({ listOfParks, usersAnswers, idx }) {
  // const [answersFromUser, setAnswersFromUser] = useState(
  //   Array(listOfParks.length).fill("")
  // );
  // // const [score, setScore] = useState(0);
  // const usersAnswers = (e) => {
  //   // e.preventDefault();
  //   answersFromUser[idx] = e.target.innerText;

  //   // setAnswersFromUser(!answersFromUser[questionIndex] && ((prevAnswersFromUser) => [ ...prevAnswersFromUser]));
  //   setAnswersFromUser((prevAnswersFromUser) => [...prevAnswersFromUser]);
  //   console.log(answersFromUser);

  //   if (answersFromUser[idx] === listOfParks[idx].answer) {
  //     setScore((score) => score + 1);
  //   }
  //   console.log(score);
  // };

  // useEffect(
  //   function myEffect(){
  //     const isInRandomList = randomThree();
  //     const filteredList = listOfParks
  //     .filter((park) => isInRandomList.includes(park.id))
  //     .map((park) => ({ id: park.id, answer: park.answer }))
  //     .concat({ id: currentQuestion.id, answer: currentQuestion.answer });
  //     console.log("My EFFECT")
  //   }, [answersFromUser]
  // )
  const currentQuestion = listOfParks[idx];
  const isInRandomList = randomThree();
  const filteredList = listOfParks
    .filter((park) => isInRandomList.includes(park.id))
    .map((park) => ({ id: park.id, answer: park.answer }))
    .concat({ id: currentQuestion.id, answer: currentQuestion.answer });

  // const [randNum, setRandNum] = useState(randomNum)
  // const randParks = [];
  //   const getRandNum= () => {
  //     setRandNum(randomNum())
  //   }

  // const [score, setScore] = useState(0);
  // const userChoice = () => {
  //   setScore((prevScore) => prevScore + 1);
  // };

  // for (let i = 0; i < 3; i++) {
  //   randParks.push(listOfParks[randomNum()]);
  //   console.log(randParks);
  // }
  //  const threeRandomParks = num.map(listOfParks[randomNum])
  //  console.Console.log(threeRandomParks);
  return (
    // <section>
    //   {randParks.map((park, i) => (
    //     <AnswerButton key={i} clickAnswer={userChoice} answer={park.answer} />
    //   ))}
    //   {/* {listOfParks.map((park) =>
    //   (<AnswerButton answer={park.answer} />)
    //   )} */}
    // </section>
    <section>
      {filteredList.map((park, i) => {
        return (
          <AnswerButton
            key={i}
            clickAnswer={usersAnswers}
            // clickAnswer={userChoice}
            // clickAnswer={e => {
            //   e.stopPropagation(); usersAnswers}}
            // clickAnswer={e=>{e.preventDefault();{usersAnswers}}}
            answer={park.answer}
          />
        );
      })}
    </section>
  );
}
