import React from 'react';

export const App = React.createClass( {
  getInitialState() {
    return {
      name: 'World'
    };
  },

  render() {
    return (
      <div>
        Hello, {this.state.name}!
        test test
      </div>
    )
  }
} );

export default App;
