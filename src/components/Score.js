import React from 'react';
import styles from '../styles/Score.module.css';

const Score = ({ type, value }) => (
  <div className={styles.Score}>
    <h2>{type} Score: {value}</h2>
  </div>
);

export default Score;
