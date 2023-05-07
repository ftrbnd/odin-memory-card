import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, name, onCardClick }) => {
  return (
    <div className={styles.Card} onClick={onCardClick}>
      <img src={image} alt={`${name} card`} />
      <h3>{name}</h3>
    </div>
  )
};

export default Card;
