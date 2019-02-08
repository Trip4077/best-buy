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
        {this.props.data && this.props.data.map( item =>
                                                    <div>
                                                      <h1>{item.name}</h1>
                                                      <img src={item.image} alt={item.name} />
                                                      <h4>{item.type}</h4>
                                                      <h2>{`Amiibo Series: ${item.amiiboSeries}`}</h2>
                                                      <h3>{`Game Series: ${item.gameSeries}`}</h3>
                                                      <ul>
                                                        <li>Release: </li>
                                                        <li>{`Australia: ${item.release.au}`}</li>
                                                        <li>{`Europe: ${item.release.eu}`}</li>
                                                        <li>{`Japan: ${item.release.jp}`}</li>
                                                        <li>{`North America: ${item.release.na}`}</li>
                                                      </ul>

                                                    </div>)}
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
