import React from 'react';
import { Text, Form, FormInput } from '../styles.js';

const Search = (props) => {
  // destructure
  return (
      <Form>
      <FormInput placeholder="Search for..." ref={(input) => input} onChange={props.onChange} />
      <Text>Showing results for the keyword <em>{props.query}</em></Text>
    </Form>
  );
};

export default Search;