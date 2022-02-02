import React, { Component } from 'react';
import {Container, Row, Col, Flex} from 'react-bootstrap';
import Bootstrap from 'bootstrap';

import GameLists from './components/GameLists';
import './App.css';

class App extends Component{
  render() {
    return(
      <div>
        <GameLists />
      </div>
    );
  }
}

export default App;

// - **Body background** - Vertical linear-gradient #081221 to #03080f
// - **Card / panel background** - #0e1a2b
// - **Headings / button text / labels** - #ffffff
// - **Text** - #c1d1e8
// - **Input background** - ****#182c47
// - **Buttons / accent blue** - #5692e8