import React from 'react';
import PropTypes from 'prop-types';
import { StatTitle, StatList } from './Stats.styled';

const Stats = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <StatTitle>Statistics</StatTitle>
      <StatList>
        <li>
          Good: <span>{goodValue}</span>
        </li>
        <li>
          Neutral: <span>{neutralValue}</span>
        </li>
        <li>
          Bad: <span>{badValue}</span>
        </li>
        <li>
          Total: <span>{totalValue()}</span>
        </li>
        <li>
          Positive feedback:{' '}
          <span>{totalValue() > 0 ? positiveFeedbackPercentage() : '0'}</span> %
        </li>
      </StatList>
    </div>
  );
};

Stats.propTypes = {
  goodValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
};

export default Stats;
