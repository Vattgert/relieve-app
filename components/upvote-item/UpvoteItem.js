import Link from 'next/link';
import PropTypes from 'prop-types';
import { UserIcon } from '../user-icon';
import { VoteCircle } from '../vote-circle';

import styles from '../../styles/UpvoteItem.module.css';

const UpvoteItem = ({ vote }) => {
  const {
    hostEvaluation,
    contentEvaluation,
    satisfactionEvalution,
    valueForMoneyEvaluation,
    voter,
  } = vote;
  const { avatar, firstName, lastName, country } = voter;
  const average =
    (hostEvaluation +
      contentEvaluation +
      satisfactionEvalution +
      valueForMoneyEvaluation) /
    4;
  return (
    <div className={styles.wrapper}>
      <div className={styles.upvoter}>
        <UserIcon image={avatar} size={'large'} />
        <div className={styles.upvoterInfo}>
          <span className={styles.info}>
            <span className={styles.name}>{`${firstName} ${lastName}`}</span>
            &nbsp;from&nbsp;
            <span className={styles.country}>{country}</span>
          </span>
          <span className={styles.website}>
            <Link href="http://relieve.com:8080">
              <a>relieve.com</a>
            </Link>
          </span>
        </div>
      </div>
      <div className={styles.votes}>
        <VoteCircle grade={hostEvaluation} position={'host'} text={'Host'} />
        <VoteCircle
          grade={contentEvaluation}
          position={'content'}
          text={'Content'}
        />
        <VoteCircle
          grade={satisfactionEvalution}
          position={'satisfaction'}
          text={'Satisfaction'}
        />
        <VoteCircle
          grade={valueForMoneyEvaluation}
          position={'valueForMoney'}
          text={'Value for money'}
        />
        <span className={styles.average}>{average}</span>
      </div>
    </div>
  );
};

UpvoteItem.propTypes = {
  vote: PropTypes.shape({
    hostEvaluation: PropTypes.number,
    contentEvaluation: PropTypes.number,
    satisfactionEvalution: PropTypes.number,
    valueForMoneyEvaluation: PropTypes.number,
    voter: PropTypes.shape({
      avatar: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      country: PropTypes.string,
    }),
  }),
};

export { UpvoteItem };
