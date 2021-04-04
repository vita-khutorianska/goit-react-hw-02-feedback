import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btn__section}>
      {Object.keys(options).map(key => (
        <button
          className={styles.btn}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
