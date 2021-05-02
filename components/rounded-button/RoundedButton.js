import Link from 'next/link';
import styles from '../../styles/RoundedButton.module.css';
import PropTypes from 'prop-types';

const RoundedButton = ({ link, text, icon, isActive, onClick }) => {
  const activeButton = isActive ? styles.active : '';
  return (
    <div className={`${styles.button} ${activeButton}`} onClick={onClick}>
      {icon}
      {link ? (
        <Link href={link}>
          <a>{text}</a>
        </Link>
      ) : (
        text
      )}
    </div>
  );
};

RoundedButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export { RoundedButton };
