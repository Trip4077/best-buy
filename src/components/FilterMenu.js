import React from 'react';

import { connect } from 'react-redux';
import { clearFilter, filterData } from '../actions';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  getKeys = search => {
    const result = [...new Set(this.props.data.map(item => item[search]))];

    return result;
  }

  filterData = e => {
    e.preventDefault();

    const search = e.target.innerText;
    const category = e.target.parentNode.parentNode.childNodes[0].childNodes[0].innerText;
    const data = this.props.data

    this.props.filterData(category, search, data);
  }

  render() {
    const amiiboS = this.getKeys('amiiboSeries');
    const gameS = this.getKeys('gameSeries');
    return(
      <section className='filter-menu'>
        <form className='filter-menu__form'>
          <div>
            <h3>Amiibo Series</h3>
          </div>

          <ul>
            <li onClick={this.props.clearFilter}>Clear Filter</li>
            {amiiboS.map(cat => <li key={Math.random()}
                                    onClick={this.filterData}> {cat} </li>)}
          </ul>
        </form>

        <form className='filter-menu__form'>
          <div>
            <h3>Game Series</h3>
          </div>

          <ul>
            <li onClick={this.props.clearFilter}>Clear Filter</li>
            {gameS.map(cat => <li key={Math.random()}
                                  onClick={this.filterData}> {cat}</li>)}
          </ul>
        </form>
      </section>
    );
  }
}

const mstp = state => {
  return {
    data: state.getDataReducer.data
  }
}

export default connect(mstp, { clearFilter, filterData })(FilterMenu);
