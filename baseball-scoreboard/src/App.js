import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  return (
    <div className="App">
      <Display strikeCount={strikeCount} ballCount={ballCount} />
      <Dashboard strikeCount={strikeCount} ballCount={ballCount} />
    </div>
  );
}

export default App;
