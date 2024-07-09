import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
import { randomThree } from "./utils";
import "./AnswerSection.css"

export default function AnswerSection({ listOfParks, usersAnswers, idx }) {
  const currentQuestion = listOfParks[idx];
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    const isInRandomList = randomThree();
    const filteredList = listOfParks
      .filter((park) => isInRandomList.includes(park.id))
      .map((park) => ({ id: park.id, answer: park.answer }))
      .concat({ id: currentQuestion.id, answer: currentQuestion.answer });
    console.log(filteredList);

     const shuffleAnswers=(listOfAnswers)=>{
        const copyOfListOfAnswers = [...listOfAnswers];
        const lenOfList=copyOfListOfAnswers.length-1;
        console.log(copyOfListOfAnswers);
        for(let i=lenOfList; i>=0;i--){
          const j=Math.floor(Math.random() * lenOfList);
          // if(j<i){
            [copyOfListOfAnswers[i], copyOfListOfAnswers[j]]= [copyOfListOfAnswers[j], copyOfListOfAnswers[i]];
         
          // }
          
        }console.log(copyOfListOfAnswers);
        return copyOfListOfAnswers;
      }

    const shuffledAnswers = shuffleAnswers(filteredList);

    setRandomList(shuffledAnswers);
  }, [listOfParks, idx]); // Dependency array to ensure useEffect runs on mount and when listOfParks or idx change

 
 


  return (
    <section className="AnswerSection">
      {randomList.map((park, i) => {
        return (
          <AnswerButton
            key={i}
            clickAnswer={usersAnswers}
            answer={park.answer}
          />
        );
      })}
    </section>
  );
}
