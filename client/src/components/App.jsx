import React from 'react';
import Search from './Search.jsx';
import SentimentStats from './SentimentStats.jsx';
import Stream from './Stream.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Welcome to Twitter Analytics</h1>
        <Search
          query={this.state.query}
          onChange={(e) => this.handleChange(e)} 
        />
        <SentimentStats />
        <Stream />
      </div>
    );
  }
}

export default App;