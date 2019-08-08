import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mr.Tatsuyaaaa',
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleBobClicked() {
    this.setState({ name: 'Bob' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />
        <button onClick={() => this.handleBobClicked()}>I am Tatsuya</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
