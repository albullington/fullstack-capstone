import React from 'react';

const Search = (props) => {
  return (
      <form>
      <input placeholder="Search for..." ref={(input) => input} onChange={props.onChange} />
      <p>{props.query}</p>
    </form>
  );
};

export default Search;