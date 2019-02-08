import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getData } from './actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    console.log(this.props.data)
    this.props.getData();

  }

  render() {
    return (
      <div className="App">
        {this.props.data && <h1>Success</h1>}
      </div>
    );
  }
}

const mstp = state => {
  console.log('STATE: ', state)
  return {
    ...state.getDataReducer
  }
}

export default connect(mstp, { getData })(App);
