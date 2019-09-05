import React from 'react';

const Display = ({ strikeCount, ballCount }) => {
  return (
    <div>
      <h2>Balls: <span data-testid="ballCount">{ballCount}</span></h2>
      <h2>Strikes: <span data-testid="strikeCount">{strikeCount}</span></h2>
    </div>
  )
}

export default Display;
