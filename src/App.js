import React, { Component } from 'react';

import Browse from './views/Browse';
import List from './views/List';
import Navigation from './components/Navigation';

import { Route } from 'react-router-dom';

import './css/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Browse} />
        <Route exact path='/lists' component={List} />
      </div>
    );
  }
}

export default App;
