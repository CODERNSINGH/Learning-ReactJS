import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Newsitmes from './components/Newsitmes';

export class App extends Component {
  constructor(){
    // we have to superclass constructor otherwise it not work
    super(); 
    console.log("Hello i am super constructor")
    // Run twice becaues two news card's only

  }
  render() {
    return (
      <>
        <Navbar />
        <div className='container my-3'>

        
        <h1>This is News based components</h1>
        <div className='row my-3'>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" description="hi this is about section would to like to say something ?? " imageurl="https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg"/>
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" description="hi this is about section would to like to say something ?? " imageurl="https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg" />
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" description="hi this is about section would to like to say something ?? "imageurl="https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg" />
          </div>
          <div className='col-md-4 my-3'>

            <Newsitmes title="Title is Here" description="hi this is about section would to like to say something ?? "imageurl="https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg" />
          </div>


        </div>
        </div>
      </>
    );
  }
}

export default App;
