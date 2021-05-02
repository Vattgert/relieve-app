import styles from '../../styles/UserIcon.module.css';
import PropTypes from 'prop-types';

const UserIcon = ({ image, size }) => {
  const sizeOptions = {
    large: styles.large,
    small: styles.small,
    'very-large': styles.veryLarge,
  };
  const sizeEnum = Object.freeze(sizeOptions);

  function getSizeValue(sizeValue) {
    return sizeValue in sizeEnum ? sizeEnum[sizeValue] : sizeEnum['small'];
  }

  return (
    <div className={`${styles.wrapper} ${getSizeValue(size)}`}>
      <img className={styles.icon} src={image} alt="user" />
    </div>
  );
};

UserIcon.propTypes = {
  image: PropTypes.string,
  size: PropTypes.size,
};

export { UserIcon };
