import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  const handleStrike = () => {

  }

  const handleBall = () => {
    
  }

  const handleFoul = () => {
    
  }

  const handleHit = () => {
    
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
