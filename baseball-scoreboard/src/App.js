import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

export const incrementCount = counter => {
  return counter + 1;
}

function App() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);
  const [outCount, setOutCount] = useState(0);
  const [inningCount, setInningCount] = useState(1);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const handleStrike = () => {
    if (strikeCount === 2) {
      resetCounts();
      handleOut();
    }
    else setStrikeCount(incrementCount(strikeCount));
  }

  const handleBall = () => {
    if (ballCount === 3) resetCounts();
    else setBallCount(incrementCount(ballCount));
  }

  const handleFoul = () => {
    if (strikeCount < 2) setStrikeCount(incrementCount(strikeCount));
  }

  const handleHit = () => {
    resetCounts();
  }

  const resetCounts = () => {
    setStrikeCount(0);
    setBallCount(0);
  }

  const handleOut = () => {
    if (outCount === 2) {
      handleInning();
      setOutCount(0);
    } else {
      setOutCount(incrementCount(outCount));
    }
  }

  const handleScore = team => {
    if (team === 'home') setHomeScore(incrementCount(homeScore));
    else if (team === 'away') setAwayScore(incrementCount(awayScore));
  }

  const handleInning = () => {
    if (inningCount === 7) setInningCount(0);
    else setInningCount(incrementCount(inningCount));
  }

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <Display strikeCount={strikeCount} ballCount={ballCount} outCount={outCount} inningCount={inningCount} homeScore={homeScore} awayScore={awayScore} />
      <Dashboard handleStrike={handleStrike} handleBall={handleBall} handleFoul={handleFoul} handleHit={handleHit} handleOut={handleOut} handleScore={handleScore} />
    </div>
  );
}

export default App;
