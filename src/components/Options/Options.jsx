import React, { Component } from 'react';
import { ButtonList, Button, StatTitle, StatsList } from './Options.style';

class Options extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGoodClick = event => {
    this.setState({
      good: (this.state.good += 1),
    });
  };

  handleOnNeutralClick = event => {
    this.setState({
      neutral: (this.state.neutral += 1),
    });
  };

  handleOnBadClick = event => {
    this.setState({
      bad: (this.state.bad += 1),
    });
  };

  //   countTotalFeedback() {
  //     let total = 0;
  //   }

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
            <Button type="button" onClick={this.handleOnGoodClick}>
              Good
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.handleOnNeutralClick}>
              Neutral
            </Button>
          </li>
          <li>
            <Button type="button" onClick={this.handleOnBadClick}>
              Bad
            </Button>
          </li>
        </ButtonList>
        <div>
          <StatTitle>Statistics</StatTitle>
          <StatsList>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
          </StatsList>
        </div>
      </div>
    );
  }
}

export default Options;
