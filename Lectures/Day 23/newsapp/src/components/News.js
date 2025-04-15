import React, { Component } from 'react'
import Newscard from './Newscard'

export class News extends Component {
  render() {
    return (
      <div>
        <Newscard/>
        <Newscard/>
        <Newscard/>
        <Newscard/>
      </div>
    )
  }
}

export default News