import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import SentimentStats from './SentimentStats.jsx';
import Stream from './Stream.jsx';
import {Background, Header} from '../styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      tweetIds: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
    this.getQuery(e.target.value);
  }

  getQuery(query) {
    axios.get(`http://localhost:3000/twitter/${query}`)
      .then((res) => {
        this.setState({tweetIds: res.data});
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Background>
        <Header>Welcome to Twitter Analytics</Header>
        <Search
          query={this.state.query}
          onChange={(e) => this.handleChange(e)} 
        />
        <Stream tweetIds={this.state.tweetIds} query={this.state.query} />
        <SentimentStats />
      </Background>
    );
  }
}

export default App;