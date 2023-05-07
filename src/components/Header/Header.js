import React from 'react';
import styles from './Header.module.css';

const Header = ({ title }) => (
  <div className={styles.Header}>
    <h1>{ title }</h1>
  </div>
);

export default Header;
