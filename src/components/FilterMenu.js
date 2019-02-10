import React from 'react';

import { connect } from 'react-redux';
import { clearFilter, filterData } from '../actions';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  togglePanel = e => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      }
    })
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
    let panelStatus;
    let panelIcon;

    this.state.isOpen ? panelStatus = '' : panelStatus = 'closed';
    this.state.isOpen ? panelIcon = <i class="fas fa-window-close"></i> : panelIcon = <i class="fas fa-filter"></i>;

    return(
      <section className={`filter-menu ${panelStatus}`}>
        <span onClick={this.togglePanel} className='icon' >{panelIcon}</span>
        <div>
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
        </div>
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
