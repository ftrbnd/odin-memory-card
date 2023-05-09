import React from 'react';
import styles from '../styles/Board.module.css';

import Card from './Card';

const Board = ({ cards, onCardClick }) => {
  return (
    <div className={styles.Board}>
      {
        cards.map((card) => {
          return <Card image={card.image} name={card.name} key={card.id} onCardClick={onCardClick} />
        })
      }
    </div>
  )
};

export default Board;
