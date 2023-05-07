import React from 'react';
import PropTypes from 'prop-types';
import styles from './Score.module.css';

const Score = ({ type, value }) => (
  <div className={styles.Score}>
    <h2>{type} Score: {value}</h2>
  </div>
);

Score.propTypes = {};

Score.defaultProps = {};

export default Score;
