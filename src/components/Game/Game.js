import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Game.module.css';

import Score from "../Score/Score";
import Card from "../Card/Card";

const Game = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [streak, setStreak] = useState([]);

  return (
    <div className={styles.Game}>
      <Score type="Best" value={bestScore} />
      <Score type="Current" value={currentScore} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
