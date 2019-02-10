import React from 'react';

import { connect } from 'react-redux';

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
            {amiiboS.map(cat => <li key={Math.random()}>{cat}</li>)}
          </ul>
        </form>

        <form className='filter-menu__form'>
          <div>
            <h3>Game Series</h3>
          </div>

          <ul>
            {gameS.map(cat => <li key={Math.random()}>{cat}</li>)}
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

export default connect(mstp, {})(FilterMenu);
