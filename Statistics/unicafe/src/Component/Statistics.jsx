// import React from "react";
import Statisticsline from "./Statisticsline";

const Statistics = ({ good, neutral, bad }) => {
  // Total number of collected feedback
  const totalFeedback = good + neutral + bad;
  // Calculate for average score
  const averageScore = (good - bad) / totalFeedback || 0;
  // Percentage of positive feedback
    const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0;
    
    return (
      <div>
        <h2>Feedback Summary:</h2>
        {/* <p>Good: {good}</p> */}
        <Statisticsline title="Good" data={good} />
        {/* <p>Neutral: {neutral}</p> */}
        <Statisticsline title="Neutral" data={neutral} />
        {/* <p>Bad: {bad}</p> */}
        <Statisticsline title="Bad" data={bad} />

        {/* step 2: Expanded application */}
        {/* <p>Total Feedback: {totalFeedback}</p> */}
        <Statisticsline title="Total Feedback" data={totalFeedback} />
        {/* <p>Average Score: {averageScore.toFixed(2)}</p> */}
        <Statisticsline title="Average Score" data={averageScore.toFixed(2)} />
        {/* <p>Positive Feedback: {positiveFeedbackPercentage.toFixed(2)}%</p> */}
        <Statisticsline title="Positive Feedback" data={positiveFeedbackPercentage.toFixed(2)} />
      </div>
    );
}

export default Statistics;