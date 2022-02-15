import React, { useState } from "react";
import uniqid from "uniqid";
import Scoreboard from "./components/Scoreboard";
import Animals from "./components/Animals";
import Instructions from "./components/Instructions";

const App = () => {
  const [animals, setAnimals] = useState([
    { animal: "🐶", id: uniqid() },
    { animal: "🐱", id: uniqid() },
    { animal: "🐭", id: uniqid() },
    { animal: "🐹", id: uniqid() },
    { animal: "🐰", id: uniqid() },
    { animal: "🦊", id: uniqid() },
    { animal: "🐻", id: uniqid() },
    { animal: "🐼", id: uniqid() },
    { animal: "🐮", id: uniqid() },
    { animal: "🐨", id: uniqid() },
    { animal: "🐷 ", id: uniqid() },
    { animal: "🐸", id: uniqid() },
  ]);
  const [clickedAnimals, setClickedAnimals] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  //Constantly changing array of random numbers to determine what corresponding animal index to display
  const [shuffled, setShuffled] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  const markAnimalAsClicked = (animal) => {
    setClickedAnimals((prevState) => {
      return [...prevState, animal];
    });
  };

  const checkIfAlreadyClicked = (e) => {
    if (clickedAnimals.includes(e.target.textContent)) {
      newHighScoreCheck();
      reset();
    } else {
      markAnimalAsClicked(e.target.textContent);
      setCurrentScore(currentScore + 1);
    }
    shuffle();
  };

  const newHighScoreCheck = () => {
    if (currentScore > highScore) setHighScore(currentScore);
  };

  const reset = () => {
    const resetArray = [];
    setClickedAnimals(resetArray);
    setCurrentScore(0);
  };

  const shuffle = () => {
    const random = [];
    while (random.length !== animals.length) {
      let num = Math.floor(Math.random() * animals.length);
      if (!random.includes(num)) {
        random.push(num);
      }
    }
    setShuffled(random);
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Animals
        animals={animals}
        shuffled={shuffled}
        click={checkIfAlreadyClicked}
      />
      <Instructions />
    </div>
  );
};

export default App;
