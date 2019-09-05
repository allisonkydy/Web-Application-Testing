import React from "react";

const Dashboard = ({ handleStrike, handleBall, handleFoul, handleHit, handleOut }) => {
  return (
    <div>
      <button onClick={() => handleStrike()} data-testid="strike-btn">
        Strike
      </button>
      <button onClick={() => handleBall()} data-testid="ball-btn">
        Ball
      </button>
      <button onClick={() => handleFoul()}>
        Foul
      </button>
      <button onClick={() => handleHit()}>
        Hit
      </button>
      <button onClick={() => handleOut()}>
        Out
      </button>
    </div>
  );
};

export default Dashboard;
