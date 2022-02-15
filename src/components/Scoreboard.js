import React from "react";

const Scoreboard = ({ currentScore, highScore }) => {
  return (
    <div className="scoreboard-container">
      <h2>Longest streak: {highScore}</h2>
      <h2>Current streak: {currentScore}</h2>
    </div>
  );
};

export default Scoreboard;
