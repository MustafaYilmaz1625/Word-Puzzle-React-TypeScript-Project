import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return <div style={{
    maxWidth:"800px",
    display: "flex",
    flexDirection: "column",
    gap:"2rem",
    margin:"0 auto",
    alignItems: "center"
  }}>
    <div style={{fontSize:"2rem", textAlign:"center"}}>Lose Win</div>
    <HangmanDrawing/>
    <HangmanWord/>
    <Keyboard/>
  </div>
}

export default App;
