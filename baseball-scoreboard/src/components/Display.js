import React from 'react';

const Display = ({ strikeCount, ballCount }) => {
  return (
    <div className="display-container">
      <div className="ball">
        <h2>Ball</h2>
        <h2 data-testid="ballCount" className="counter">{ballCount}</h2>
      </div>
      <div className="strike">
        <h2>Strike</h2>
        <h2 data-testid="strikeCount" className="counter">{strikeCount}</h2>
      </div>
    </div>
  )
}

export default Display;
