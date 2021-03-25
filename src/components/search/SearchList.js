import React, { useState, useEffect } from 'react';

const fetchList = async url => {
  const res = await fetch(url);
  return await res.json();
};

const filterByBody = (arr, filter) => {
    return arr.filter(e => e.body.includes(filter.trim()))
}

const SearchList = ({ filter }) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10';

  useEffect(() => {
    fetchList(url).then(data => setList(data));
  }, [url]);

  useEffect(() => {
    setFilteredList(filterByBody(list, filter));
  }, [filter, list]);

  return (
    <ul>
      {filteredList.map(it => (
        <li key={it.id}>{it.body}</li>
      ))}
    </ul>
  );
};

export default SearchList