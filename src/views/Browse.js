import React from 'react';
import AmiiboCard from '../components/AmiiboCard';
import FilterMenu from '../components/FilterMenu';
import Loader from '../components/Loader';

import { connect } from 'react-redux';
import { getData } from '../actions';

class Browse extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log('PROPS', this.props.data.length > 0)
    return(
      <div className='browse'>
        <FilterMenu />
        {this.props.getActive ? <Loader /> : this.props.data.map( item => <AmiiboCard key={item.image} item={item} /> ) }
      </div>
    );
  }
}

const mstp = state => {
  const stateData = state.filterReducer.data.length > 0 ? state.filterReducer.data : state.getDataReducer.data

  return {
    ...state.getDataReducer,
    data: stateData
  }
}

export default connect(mstp, { getData })(Browse);
