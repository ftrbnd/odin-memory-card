import React, { useEffect, useState } from 'react';
import styles from '../styles/Game.module.css';

import Score from "./Score";
import Board from "./Board";
import cards from "../assets/cards";

const Game = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [streak, setStreak] = useState([]);
  const [gameCards, setGameCards] = useState(cards);

  useEffect(() => {
    shuffleCards(); // on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardClick = e => {
    e.preventDefault();

    calculateScores(e.target.src);
    shuffleCards();
  };

  const calculateScores = (image) => {
    if (!streak.includes(image)) {
      setStreak([...streak, image]);
      const newScore = currentScore + 1;

      setCurrentScore(newScore);
      if (newScore > bestScore)
        setBestScore(newScore);
    } else {
      setStreak([]);
      setCurrentScore(0);
    }
  };

  const shuffleCards = () => {
    setGameCards([...gameCards].sort(() => 0.5 - Math.random()))
  };

  return (
    <div className={styles.Game}>
      <Score type="Best" value={bestScore} />
      <Score type="Current" value={currentScore} />
      <Board cards={gameCards} onCardClick={handleCardClick} />
    </div>
  );
}

export default Game;
