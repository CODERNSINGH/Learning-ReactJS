import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Newsitmes from './components/Newsitmes';

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container my-3'>

        
        <h1>This is News based components</h1>
        <div className='row'>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" about="hi this is about section would to like to say something ?? " />
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" about="hi this is about section would to like to say something ?? " />
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" about="hi this is about section would to like to say something ?? " />
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" about="hi this is about section would to like to say something ?? " />
          </div>


        </div>
        </div>
      </>
    );
  }
}

export default App;
