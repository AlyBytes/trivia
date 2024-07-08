import { useState } from "react";

export default function StartPage({ onStart }) {
  return (
    <div>
      <h1>Welcome to TRIVIA</h1>
      <button onClick={onStart}>Start Trivia</button>
    </div>
  );
}
