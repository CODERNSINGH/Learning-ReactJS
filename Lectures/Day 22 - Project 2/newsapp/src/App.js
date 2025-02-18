import React, { Component } from 'react'

export default class App extends Component{
  User = "Narendra Singh"
  
  render (){
    
    return (
      
      <div>
        
        <h1>Hello i am Class Based Component {this.user}</h1>
      </div>
    )
  }
}