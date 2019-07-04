import React, { Component } from 'react'
import './css/singleAD.css'
import { connect } from 'react-redux'
import { loadAd } from '../actions/actions'

class SingleAD extends Component {
  componentDidMount(){
    const id = this.props.match.params.id
    console.log('ID', id)
    this.props.loadAd(id)
  }

  render() {
    if(!this.props.ads) return 'Loading...'
    return (
      <div className="card-wrapper">
      <div className="single-card">
        <img src={this.props.ads.picture} alt=""/>
        <h1>{this.props.ads.title}</h1>
        <p className="price">${this.props.ads.price}</p>
        <p>{this.props.ads.description}</p>
        <p>Email: {this.props.ads.email}</p>
        <p>Phone: {this.props.ads.phone}</p>
        <p><button>Add to your WishList</button></p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.advertisements
  }
}

export default connect(mapStateToProps, {loadAd})(SingleAD)
