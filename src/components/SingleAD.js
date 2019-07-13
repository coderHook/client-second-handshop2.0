import React, { Component } from 'react'
import './css/singleAD.css'
import { connect } from 'react-redux'
import { loadAd } from '../actions/actions'

class SingleAD extends Component {
  componentDidMount(){
    const id = this.props.match.params.id
    this.props.loadAd(id)
  }

  render() {
    const { singleAd } = this.props

    if(!this.props.singleAd) return 'Loading...'

    return (
      <div className="card-wrapper">
      <div className="single-card">
        <img src={singleAd.picture} alt=""/>
        <h2>{singleAd.title}</h2>
        <p className="price">${singleAd.price}</p>
        <p>{singleAd.description}</p>
        <p>Email: {singleAd.email}</p>
        <p>Phone: {singleAd.phone}</p>
        <p><button>Add to your WishList</button></p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singleAd: state.singleAd,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {loadAd})(SingleAD)
