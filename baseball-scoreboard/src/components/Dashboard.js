import React from "react";

const Dashboard = ({ handleStrike, handleBall, handleFoul, handleHit }) => {
  return (
    <div>
      <button onClick={() => handleStrike()} data-testid="strike-btn">
        Strike
      </button>
      <button onClick={() => handleBall()} data-testid="ball-btn">
        Ball
      </button>
      <button onClick={() => handleFoul()} data-testid="foul-btn">
        Foul
      </button>
      <button onClick={() => handleHit()} data-testid="hit-btn">
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
