import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ image, name, onCardClick }) => {
  return (
    <div className={styles.Card}>
      <img src={image} alt={`${name} card`} onClick={onCardClick} />
      <h3>{name}</h3>
    </div>
  )
};

export default Card;
