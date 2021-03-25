import React, { useState } from 'react';
import SearchList from './SearchList';
import { useDebouncedCallback } from 'use-debounce';

const delay = 400;
const inputStyle = {
  margin: '20px 0 30px 0',
  padding: '5px 8px',
  width: '250px',
  border: '1px solid gray',
  borderRadius: '4px'
};

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [filter, setFilter] = useState('');
  const debouncedSetFilter = useDebouncedCallback(
    filter => setFilter(filter),
    delay
  );

  const onChangeSearch = e => {
    const { value } = e.target;
    setSearchString(value);
    debouncedSetFilter(value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={onChangeSearch}
        style={inputStyle}
      />
      <SearchList filter={filter} />
    </div>
  );
};

export default Search;