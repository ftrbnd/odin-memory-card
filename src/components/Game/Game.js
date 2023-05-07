import React, { useState } from 'react';
import styles from './Game.module.css';

import Score from "../Score/Score";
import Card from "../Card/Card";
import cards from "../../cards";

const Game = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [streak, setStreak] = useState([]); // list of unique card ids

  const handleCardClick = e => {
    e.preventDefault();
    // calculateScores();
    // shuffleCards();
  };

  return (
    <div className={styles.Game}>
      <Score type="Best" value={bestScore} />
      <Score type="Current" value={currentScore} />
      {
        cards.map((card) => {
          return <Card image={card.image} name={card.name} key={card.id} onCardClick={handleCardClick} />
        })
      }
    </div>
  );
}

export default Game;
