import React from 'react';
import PropTypes from 'prop-types';
import { Text, Form, FormInput } from '../styles';

const propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

const defaultProps = {
  query: '',
  onChange: null,
  onKeyDown: () => {},
};

const Search = ({ onChange, query, onKeyDown }) => (
  <Form>
    <FormInput placeholder="Search for..." ref={input => input} onChange={onChange} onKeyDown={onKeyDown} />
      <Text>Showing results for the keyword <em>{query}</em></Text>
  </Form>
);

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
