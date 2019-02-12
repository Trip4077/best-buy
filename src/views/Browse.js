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
    return(
      <div className='browse'>
        <FilterMenu />
        {this.props.getActive || this.props.filterActive ? <Loader /> : this.props.data.map( item => <AmiiboCard key={item.image} item={item} /> ) }
      </div>
    );
  }
}

const mstp = state => {
  let stateData = state.filterReducer.data.length > 0 ? state.filterReducer.data : state.getDataReducer.data
  stateData = state.searchReducer.result.length > 0 ? state.searchReducer.result : state.getDataReducer.data

  return {
    ...state.getDataReducer,
    filterActive: state.filterReducer.filterActive,
    data: stateData
  }
}

export default connect(mstp, { getData })(Browse);
