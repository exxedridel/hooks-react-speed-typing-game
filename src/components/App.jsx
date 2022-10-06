import React, { useState, useEffect, useRef } from "react";
import useWordGame from "../hooks/useWordGame";
import "../styles/global.scss";

const App = () => {
  const {
    textAreaRef,
    handleChange,
    textArea,
    isTimeRunning,
    timeRemaining,
    startNewGame,
    countedWords,
  } = useWordGame(10);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        value={textArea}
        placeholder=""
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startNewGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {countedWords}</h1>
    </div>
  );
};

export default App;
