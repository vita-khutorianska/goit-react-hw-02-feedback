import './App.css';
import FeedbackOptions from './Component/FeedbackOptions';

function App() {
  // eslint-disable-next-line no-undef
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <div className="App">
      <FeedbackOptions></FeedbackOptions>
    </div>
  );
}

export default App;
