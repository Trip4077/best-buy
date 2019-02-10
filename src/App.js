import React, { Component } from 'react';
import { Browse } from './views/Browse';

import { connect } from 'react-redux';
import { getData } from './actions';

import './css/index.css';

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        {this.props.data && <Browse data={this.props.data} />}
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
