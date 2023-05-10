import React from 'react';
import styles from '../styles/Header.module.css';

const Header = ({ title }) => (
  <div className={styles.Header}>
    <h1>{title}</h1>
    <p>Click on as many cards as you can without repeating!</p>
  </div>
);

export default Header;
