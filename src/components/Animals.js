import React, { useEffect } from "react";
import Card from "./Card";
import "../styles/styles.css";

const Animals = ({ animals, shuffled, click }) => {
  return (
    <div className="animals-container">
      {shuffled.map((num) => {
        return (
          <Card
            click={click}
            key={animals[num].id}
            content={animals[num].animal}
          />
        );
      })}
    </div>
  );
};

export default Animals;
