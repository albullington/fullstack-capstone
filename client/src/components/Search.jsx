import React from 'react';

const Search = (props) => {
  return (
      <form>
      <input placeholder="Search for..." ref={(input) => input} onChange={props.onChange} />
      <p>Showing results for the keyword <em>{props.query}</em></p>
    </form>
  );
};

export default Search;