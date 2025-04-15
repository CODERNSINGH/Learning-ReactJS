import React, { Component } from 'react'

export class Newscard extends Component {
  // constructor(){
  //   // throw error to solve that we have to use super() funtion why we need this is wenever we made object of class then we use constructor
  //   super(); 
  //   console.log("it will run as may time as Newscard called bcoz constructor card ka hai")
  // }


  render() {
    // 
    let {title, description,url} = this.props;
    return (
      <div className='container my-3 '>
        <div className="card">
          <img src={url} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newscard