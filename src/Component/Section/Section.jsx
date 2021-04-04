import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  title: PropTypes.node.isRequired,
};
export default Section;
