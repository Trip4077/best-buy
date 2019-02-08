import React, { Component } from 'react';
import AmiiboCard from './components/AmiiboCard';

import { connect } from 'react-redux';
import { getData } from './actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        {this.props.data && this.props.data.map( item => <AmiiboCard key={item.image} item={item} />)}
      </div>
    );
  }
}

const mstp = state => {
  return {
    ...state.getDataReducer
  }
}

export default connect(mstp, { getData })(App);
