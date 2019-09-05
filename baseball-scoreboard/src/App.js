import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  const handleStrike = () => {
    if (strikeCount === 2) resetCounts();
    else setStrikeCount(strikeCount + 1);
  }

  const handleBall = () => {
    if (ballCount === 3) resetCounts();
    else setBallCount(ballCount + 1);
  }

  const handleFoul = () => {
    if (strikeCount < 2) setStrikeCount(strikeCount + 1);
  }

  const handleHit = () => {
    resetCounts();
  }

  const resetCounts = () => {
    setStrikeCount(0);
    setBallCount(0);
  }

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <Display strikeCount={strikeCount} ballCount={ballCount} />
      <Dashboard handleStrike={handleStrike} handleBall={handleBall} handleFoul={handleFoul} handleHit={handleHit} />
    </div>
  );
}

export default App;
