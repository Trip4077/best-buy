import React, { Component } from 'react';
import Browse from './views/Browse';
import { Route } from 'react-router-dom';

import './css/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Browse} />
      </div>
    );
  }
}

export default App;
