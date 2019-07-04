import React, { Component } from 'react'
import './css/advertisements.css'

export default class Advertisements extends Component {
  render() {
    return (
      <div className="card">
        <img className="product" src={this.props.ads.picture} alt="Avatar" />
        <div className="container">
          <h4><b>{this.props.ads.title}</b></h4> 
          <p>{this.props.ads.price * 1000 + '€'}</p> 
        </div>
      </div>
    )
  }
}
