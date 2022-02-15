import React from "react";
import "../styles/styles.css";

const Card = ({ click, content }) => {
  console.log("udpated");
  return (
    <div className="animals" onClick={click}>
      {content}
    </div>
  );
};

export default Card;
