export default function AnswerButton({ clickAnswer, answer }) {
  return <button onClick={clickAnswer}> {answer} </button>;
}
