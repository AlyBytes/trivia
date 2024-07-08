import Question from "./Question";

export default function QuestionSection({ aList }) {
  return (
    <div>
      {aList.map((park, i) => {
        return <Question key={i} id={i + 1} question={park.question} />;
      })}
    </div>
  );
}
