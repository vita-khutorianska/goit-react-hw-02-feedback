import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const Notification = ({ message }) => (
  <div>
    <h2 className={styles.message}> {message}</h2>
  </div>
);
Notification.propTypes = {
  Notification: PropTypes.string.isRequired,
};
export default Notification;
