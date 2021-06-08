import styles from "./Section.module.scss";
import PropTypes from "prop-types";
const Section = ({ className, title, children }) => {
  const classNames = styles.section + " " + className;
  return (
    <section className={classNames}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Section;
