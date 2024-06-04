// src/components/TimerDisplay.js
import React from 'react';

const TimerDisplay = ({ remainingTime }) => {
  return (
    <div className='counter-box'>
      <h1>{remainingTime} seconds</h1>
    </div>
  );
};

export default TimerDisplay;
