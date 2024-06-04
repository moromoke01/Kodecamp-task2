// src/App.js
import React, { useState, useEffect } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {
  const [initialTime, setInitialTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleSetTime = (time) => {
    setInitialTime(time);
    setRemainingTime(time);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(initialTime);
  };

  return (
    <div className="App">
      <TimerInput onSetTime={handleSetTime} />
      <TimerDisplay remainingTime={remainingTime} />
      <TimerControls 
        onStart={handleStart} 
        onPause={handlePause} 
        onReset={handleReset} 
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;
