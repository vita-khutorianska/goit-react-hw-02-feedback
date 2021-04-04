import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './Component/FeedbackOptions/FeedbackOptions';

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
  render() {
    return (
      <div className="App">
        <FeedbackOptions />
      </div>
    );
  }
}

export default App;
