import React, { Component } from 'react'
import InCirculationContainer from './InCirculationContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        Fridge Runs
        <InCirculationContainer />
      </div>
    )
  }
}

export default App
