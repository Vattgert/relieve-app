import styles from '../../styles/VoteCircle.module.css';
import PropTypes from 'prop-types';

const VoteCircle = ({ grade = 0, radius = 19, position = 'default', text }) => {
  const circleColorsByPosition = {
    default: '#00C9A7',
    host: '#845EC2',
    content: '#37859F',
    satisfaction: '#FF8066',
    valueForMoney: '#3596B5',
  };

  const strokeColor = circleColorsByPosition[position];

  function calculateStrokeOptions() {
    const circumference = 2 * 3.14 * radius;
    const tenthCirclePart = circumference / 10;
    const gradeCirclePart = circumference - tenthCirclePart * grade;
    return {
      strokeDasharray: circumference,
      strokeDashoffset: gradeCirclePart,
    };
  }

  const circleStyle = {
    stroke: strokeColor,
  };

  Object.assign(circleStyle, calculateStrokeOptions());

  return (
    <div className={styles.vote} style={{ color: strokeColor }}>
      <span className={styles.grade}>{grade}</span>
      <svg>
        <circle
          r={radius}
          cx={radius + 1}
          cy={radius + 1}
          style={circleStyle}
        ></circle>
      </svg>
      <div className={styles.tooltip}>
        <div className={styles.tooltipText}>{text}</div>
      </div>
    </div>
  );
};

VoteCircle.propTypes = {
  grade: PropTypes.number,
  radius: PropTypes.number,
  position: PropTypes.string,
  text: PropTypes.string,
};

export { VoteCircle };
