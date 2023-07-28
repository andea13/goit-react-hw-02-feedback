import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveGoodFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: (prevState.good += 1),
  //     };
  //   });
  // };

  // onLeaveNeutralFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: (prevState.neutral += 1),
  //     };
  //   });
  // };

  // onLeaveBadFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: (prevState.bad += 1),
  //     };
  //   });
  // };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  // const Object = {
  //   name: 'Mango'
  // }

  // Object.name,
  // Object['name']
  // const prop = "name"
  // Object[prop]

  //Object literals

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return positivePercentage;
  };

  render() {
    return (
      <AppContainer
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <div>There's no feedback</div>
        )}
      </AppContainer>
    );
  }
}

export default App;
