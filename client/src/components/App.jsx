import React from 'react';
import Search from './Search.jsx';
import SentimentStats from './SentimentStats.jsx';
import Stream from './Stream.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      tweetId: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
    if (this.state.query !== '') {
      this.getQuery();
    }
  }

  getQuery() {
    let query = this.state.query;
    axios.get(`http://localhost:3000/tweets/${query}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Stream tweetId={this.state.tweetId} />
      </div>
    );
  }
}

export default App;