import "./AnswerButton.css";
export default function AnswerButton({ clickAnswer, answer }) {
  return (
    <button className="AnswerButton" onClick={clickAnswer}>
      {" "}
      {answer}{" "}
    </button>
  );
}
