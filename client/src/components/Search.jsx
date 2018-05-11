import React from 'react';
import PropTypes from 'prop-types';
import { Text, Form, FormInput } from '../styles';

const propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  query: '',
  onChange: null,
};

const Search = ({ onChange, query }) => (
  <Form>
    <FormInput placeholder="Search for..." ref={input => input} onChange={onChange} />
    <Text>Showing results for the keyword <em>{query}</em></Text>
  </Form>
);

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
