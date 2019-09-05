import React from "react";

const Dashboard = ({ handleStrike, handleBall, handleFoul, handleHit, handleOut, handleScore }) => {
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
      <button onClick={() => handleOut()} data-testid="out-btn">
        Out
      </button>
      <div className="score-btns">
        <button onClick={() => handleScore('home')} data-testid="home-btn">
          Home
        </button>
        <button onClick={() => handleScore('away')} data-testid="away-btn">
          Away
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
