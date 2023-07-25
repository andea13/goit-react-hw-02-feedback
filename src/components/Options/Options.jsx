import React, { Component } from 'react';
import Stats from 'components/Stats/Stats';
import { ButtonList, Button } from './Options.styled';

class Options extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGoodIncrement = () => {
    this.setState(prevState => {
      console.log(prevState.good);
      return {
        good: (prevState.good += 1),
      };
    });
  };

  handleOnNeutralIncrement = () => {
    this.setState(prevState => {
      // console.log(prevState);
      return {
        neutral: (prevState.neutral += 1),
      };
    });
  };

  handleOnBadIncrement = () => {
    this.setState(prevState => {
      // console.log(prevState);
      return {
        bad: (prevState.bad += 1),
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return positiveFedbackPercentage;
  };

  reset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <ButtonList>
          <li>
            <Button type="button" onClick={this.handleOnGoodIncrement}>
              Good
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.handleOnNeutralIncrement}>
              Neutral
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.handleOnBadIncrement}>
              Bad
            </Button>
          </li>
        </ButtonList>
        <Stats
          goodValue={this.state.good}
          neutralValue={this.state.neutral}
          badValue={this.state.bad}
          totalValue={this.countTotalFeedback}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Options;
