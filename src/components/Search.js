import React from 'react';
import { connect } from 'react-redux';
import { searchCheck } from '../actions';

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

  handleSearch = e => {
    e.preventDefault();

    this.props.searchCheck(this.props.data, this.state.searchTerm)
  }

  render() {
    return(
      <form className='search'>
        <input className='search__input'
               type='text'
               placeholder='Search by name...'
               onChange={this.handleChange}
               value={this.state.searchTerm} />

        <button onClick={this.handleSearch} className='search__btn'>Search</button>
      </form>
    );
  }
}

const mstp = state => {
  return {
    data: state.getDataReducer.data
  }
}

export default connect(mstp, { searchCheck })(Search);
