import React from 'react';

const Display = ({ strikeCount, ballCount }) => {
  return (
    <div>
      <h2>Balls: {ballCount}</h2>
      <h2>Strikes: {strikeCount}</h2>
    </div>
  )
}

export default Display;
