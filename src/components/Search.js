import React from 'react';

class Search extends React.Component {
  render() {
    return(
      <form className='search'>
        <input className='search__input'
               type='text'
               placeholder='Search by name...' />

        <button className='search__btn'>Search</button>
      </form>
    );
  }
}

export default Search;
