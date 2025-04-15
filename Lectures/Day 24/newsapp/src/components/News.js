import React, { Component } from 'react'
import Newscard from './Newscard'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>Today News Headlines are :-</h1>
        <div className="row">
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="https://media.loom-app.com/gizmodo/dist/images/2025/02/18/design_hero_static__e56c1v71mr6u_large.jpg?w=1280&h=630&f=jpg" /></div>
          <div className="col-md-4"><Newscard title="title 02" description="sample des 2" url="sampleurl 2" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 02" description="sample des 2" url="sampleurl 2" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
        </div>


      </div>
    )
  }
}

export default News