import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/header.css'

export default class Header extends Component {
  render() {
 
    return (
      <header>
        <div className="overlay">
          <h2>Second Chance</h2>
          <h3>Sell the stuff that you dont use anymore and give it a second Chance to shine.</h3>
        <br />
        <Link to="/publishAd" >
          <button>
            Publish Add
          </button>
        </Link>
          </div>
      </header>

    )
  }
}
