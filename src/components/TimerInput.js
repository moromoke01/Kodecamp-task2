// src/components/TimerInput.js
import React, { useState } from 'react';

const TimerInput = ({ onSetTime }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeInSeconds = parseInt(inputValue, 10);
    if (!isNaN(timeInSeconds)) {
      onSetTime(timeInSeconds);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Enter seconds" 
      />
      <button type="submit">Set Timer</button>
    </form>
  );
};

export default TimerInput;
