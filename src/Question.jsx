export default function Question({ id = 1, question }) {
  return (
    <div>
      <h2>Question {id}</h2>
      <p>{question}</p>
      {/* <p>{questionNPS}</p> */}
    </div>
  );
}
