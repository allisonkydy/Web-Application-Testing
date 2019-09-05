import React from 'react';

const Dashboard = ({ handleStrike, handleBall, handleFoul, handleHit }) => {
  return (
    <div>
      <button onClick={() => handleStrike}>Strike</button>
      <button onClick={() => handleBall}>Ball</button>
      <button onClick={() => handleFoul}>Foul</button>
      <button onClick={() => handleHit}>Hit</button>
    </div>
  )
}

export default Dashboard;
