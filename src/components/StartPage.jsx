import "../StartPage.css"
import "../Button.css"
export default function StartPage({ onStart }) {
  return (
  
          <div className="StartPage">
            <h1>Welcome to TRIVIA</h1>
            <button onClick={onStart} className="Button">Start Trivia</button>
          </div>
      
  );
}
