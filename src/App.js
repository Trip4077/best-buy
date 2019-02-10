import React, { Component } from 'react';

import Browse from './views/Browse';

import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

import './css/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Browse} />
      </div>
    );
  }
}

export default App;
