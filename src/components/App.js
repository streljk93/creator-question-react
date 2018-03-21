import React, { Component } from 'react';

import Header from './Header';
import FormQuestion from './FormQuestion';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormQuestion />
      </div>
    );
  }
}

export default App;
