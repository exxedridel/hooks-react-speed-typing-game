import React, { useState, useEffect } from "react";
import "../styles/global.scss";

const App = () => {
  const STARTING_TIME = 5;

  const [textArea, setTextArea] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [countedWords, setCountedWords] = useState(0);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function handleChange(e) {
    const { value } = e.target;
    setTextArea(value);
  }

  function countWords(textArea) {
    // const words = textArea.trim().split(" ");
    const words = textArea.split(" ");
    return words.filter((word) => word !== "").length; //with this aproach .trim() no longer needed
  }

  function startNewGame() {
    setTextArea("");
    setTimeRemaining(STARTING_TIME);
    setIsTimeRunning(true);
  }

  function endGame() {
    setIsTimeRunning(false);
    setCountedWords(countWords(textArea));
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={textArea} placeholder="" onChange={handleChange} disabled={!isTimeRunning}/>
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startNewGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {countedWords}</h1>
    </div>
  );
};

export default App;
