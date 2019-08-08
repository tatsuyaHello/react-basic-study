import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mr.Tatsuyaaaa',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Tatsuya' });
  }

  handleMouseOut() {
    this.setState({ name: 'Yamamura' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
