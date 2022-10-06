import { useEffect, useRef, useState } from "react";

function useWordGame(startingTime = 25) {
  const [textArea, setTextArea] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [countedWords, setCountedWords] = useState(0);
  const textAreaRef = useRef(null);

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
    setTimeRemaining(startingTime);
    setIsTimeRunning(true);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setCountedWords(countWords(textArea));
  }

  return {textAreaRef, handleChange,textArea, isTimeRunning, timeRemaining, startNewGame, countedWords}
}

export default useWordGame;
