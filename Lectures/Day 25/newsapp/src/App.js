import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <h1>This is News based components</h1>
      <News/>
      </>
    );
  }
}

export default App;
