import React from "react";
import "../styles/styles.css";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <h3 id="landscape">(ok i hope u have ur shit sideways now)</h3>
      <h3 id="portrait">(plz i hope this means ur in portrait mode)</h3>
      <p>The animals will shuffle after each click.</p>
      <p>The score resets to 0 if an animal is selected more than once.</p>
      <p>
        Try to select an animal that you have not chosen before and go on the
        longest streak possible!
      </p>
    </div>
  );
};

export default Instructions;
