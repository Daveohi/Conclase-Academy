import { useState } from 'react'
import Statistics from './Component/Statistics'
import Button from './Component/Button';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const statistics = "no feedback";
  const totalFeedback = good + neutral + bad;

  

  return (
    <>
      <div>
        <h1>Customer Feedback</h1>
        <div>
          {/* <button onClick={() => setGood(good + 1)}>Good</button> */}
          <Button text="Good" handleClick={() => setGood(good + 1)} />

          {/* <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> */}
          <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
          {/* <button onClick={() => setBad(bad + 1)}>Bad</button> */}
          <Button text="Bad" handleClick={() => setBad(bad + 1)} />
        </div>
        {/* {statistics < 0 ? "Please select"} */}
        {totalFeedback > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </>
  );
}

export default App
