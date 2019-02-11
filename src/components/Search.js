import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
     searchTerm: e.target.value
    });
  }

  render() {
    return(
      <form className='search'>
        <input className='search__input'
               type='text'
               placeholder='Search by name...'
               onChange={this.handleChange}
               value={this.state.searchTerm} />

        <button className='search__btn'>Search</button>
      </form>
    );
  }
}

export default Search;
