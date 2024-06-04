
import React from 'react';

const TimerControls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div className='timer-controls'>
      <button className='start' onClick={onStart} disabled={isRunning}>Start</button>
      <button className='pause' onClick={onPause} disabled={!isRunning}>Pause</button>
      <button className='reset'onClick={onReset}>Reset</button>
    </div>
  );
};


export default TimerControls;
