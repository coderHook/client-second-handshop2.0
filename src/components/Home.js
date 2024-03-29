import React, { Component } from 'react'
import Advertisements from './Advertisements'
import { Link } from 'react-router-dom'
import { loadAds } from '../actions/actions'
import { connect } from 'react-redux'
import Header from './Header'

import './css/home.css'

class Home extends Component {

  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    if (!this.props.advertisements) return 'Loading...'
    return (
      <div className="main">
        <Header />
        <div className="grid-ads">
          {this.props.advertisements && this.props.advertisements.map(ad =>
            <Link to={`/advertisement/${ad.id}`}
              key={ad.id}
              ads={ad}
            >
              
              <Advertisements
                key={ad.id}
                ads={ad}
              />

            </Link>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    advertisements: state.advertisements
  }
}

export default connect(mapStateToProps, { loadAds })(Home)