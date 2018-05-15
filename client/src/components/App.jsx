import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import SentimentStats from './SentimentStats.jsx';
import Stream from './Stream.jsx';
import { Background, Header, Container } from '../styles';

// /*

// eslint init

// look into:
// file loaders for webpack
// */

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      tweetIds: [],
      sentiment: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  getQuery(query) {
    axios.get(`http://localhost:3000/twitter/${query}`)
      .then((res) => {
        this.setState({
          tweetIds: res.data.tweetIds,
          sentiment: res.data.sentiment,
        });
      }).catch((err) => {
        // throw (err);
      });
  }


  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
    this.getQuery(e.target.value);
  }

  render() {
    const {
      tweetIds,
      query,
      sentiment,
    } = this.state;

    return (
      <Background>
        <Header>Welcome to Twitter Analytics</Header>
        <Search
          query={query}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
        />
        <Container>
          <Stream tweetIds={tweetIds} query={query} />
          <SentimentStats sentiment={sentiment} tweetIds={tweetIds} />
        </Container>
      </Background>
    );
  }
}

