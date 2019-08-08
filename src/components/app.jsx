import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="Tatsuya" />
        <Greeting name="Yamamura" />
      </div>
    );
  }
}

export default App;
