
import React from 'react';

const TimerControls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div>
      <button onClick={onStart} disabled={isRunning}>Start</button>
      <button onClick={onPause} disabled={!isRunning}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default TimerControls;
