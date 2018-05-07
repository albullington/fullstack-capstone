import React from 'react';
import {Text} from '../styles.js';

const Search = (props) => {
  return (
      <form>
      <input placeholder="Search for..." ref={(input) => input} onChange={props.onChange} />
      <Text>Showing results for the keyword <em>{props.query}</em></Text>
    </form>
  );
};

export default Search;