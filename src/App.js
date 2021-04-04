import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './Component/FeedbackOptions/FeedbackOptions';
import Statistics from './Component/Statistics/Statistics';
import Section from './Component/Section/Section';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  // eslint-disable-next-line no-undef
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  feedbackCounter = e => {
    this.state(preState => {
      return {
        [e]: preState[e] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = values.reduce((total, value) => total + value, 0);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let positive = 0;
    let total = this.countTotalFeedback();
    positive = Math.round((this.state.good * 100) / total);
    return positive;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave Feedback">
          <FeedbackOptions options={this.state} />
          onLeaveFeedback={this.feedbackCounter}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default App;
