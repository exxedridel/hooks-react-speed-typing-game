import React, { useState, useEffect } from "react";
import "../styles/global.scss";

const App = () => {
  const [textArea, setTextArea] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(25);

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  function handleChange(e) {
    const { value } = e.target;
    setTextArea(value);
  }

  function countWords(textArea) {
    // const words = textArea.trim().split(" ");
    const words = textArea.split(" ");
    return console.log(words.filter((word) => word !== "").length); //with this aproach .trim() no longer needed
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={textArea} placeholder="" onChange={handleChange} />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={() => countWords(textArea)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
};

export default App;
