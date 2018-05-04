import React from 'react';

const SentimentStats = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Total tweets (past 24 hrs)</th>
          <th colSpan="2">Overall sentiment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>42</td>
          <td>positive</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SentimentStats;