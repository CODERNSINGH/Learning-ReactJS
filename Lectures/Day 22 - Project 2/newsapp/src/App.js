import React, { Component } from 'react'

export default class App extends Component{
  User = prompt("Enter Your Name")
  
  render (){
    return (
      
      <div>
        
        <h1>Hello i am Class Based Component {this.User}</h1>
      </div>
    )
  }
}