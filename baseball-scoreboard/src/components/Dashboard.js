import React from 'react';

const Dashboard = ({ strikeCount, ballCount }) => {
  return (
    <div>
      <button>Strike</button>
      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  )
}

export default Dashboard;
