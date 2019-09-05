import React from 'react';

const Display = ({ strikeCount, ballCount, outCount, inningCount, homeScore, awayScore }) => {
  return (
    <div className="display-container">
      <div className="ball">
        <h2>Balls</h2>
        <h2 data-testid="ballCount" className="counter">{ballCount}</h2>
      </div>
      <div className="strike">
        <h2>Strikes</h2>
        <h2 data-testid="strikeCount" className="counter">{strikeCount}</h2>
      </div>
      <div className="out">
        <h2>Out</h2>
        <h2 data-testid="outCount" className="counter">{outCount}</h2>
      </div>
      <div className="inning">
        <h2>Inning</h2>
        <h2 data-testid="inningCount" className="counter">{inningCount}</h2>
      </div>
      <div className="home">
        <h2>Home</h2>
        <h2 data-testid="homeScore" className="counter">{homeScore}</h2>
      </div>
      <div className="away">
        <h2>Away</h2>
        <h2 data-testid="awayScore" className="counter">{awayScore}</h2>
      </div>
    </div>
  )
}

export default Display;
