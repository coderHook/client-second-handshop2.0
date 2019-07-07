import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/header.css'

export default class Header extends Component {
  render() {
    console.log('URL', window.location.href.split('/')
    )

    const url = window.location.href.split('/')
    return (
      <header>
        <div className="overlay">
          <h2>Second Chance</h2>
          <h3>Sell the stuff that you dont use anymore and give it a second Chance to shine.</h3>
        <br />
        <Link to="/publishAd" >
          <button>
            { url[url.length - 1] === 'publishAd' 
              ? 'Buy Stuff'
              : 'Publish Add'
            }
          </button>
        </Link>
          </div>
      </header>

    )
  }
}
