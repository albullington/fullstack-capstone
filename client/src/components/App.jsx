import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import SentimentStats from './SentimentStats.jsx';
import Stream from './Stream.jsx';
import {Background, Header, Container} from '../styles';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      tweetIds: [], 
      sentiment: []
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
        this.setState({
          tweetIds: res.data.tweetIds,
          sentiment: res.data.sentiment
        });
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
        <Container>
        <Stream tweetIds={this.state.tweetIds} query={this.state.query} />
        <SentimentStats sentiment={this.state.sentiment} tweetIds={this.state.tweetIds} />
        </Container>
      </Background>
    );
  }
}

export default App;