import "./Question.css"
export default function Question({ id = 1, question }) {
  return (
    <div className="QuestionSection">
      <h2>Question {id}</h2>
      <p className="Question">{question}</p>
    </div>
  );
}
