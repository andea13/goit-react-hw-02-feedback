import React, { Component } from 'react';
import { ButtonList, Button, StatTitle, StatsList } from './Options.style';

class Options extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGoodIncrement = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleOnNeutralIncrement = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleOnBadIncrement = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        bad: prevState.bad + 1,
      };
    });
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
