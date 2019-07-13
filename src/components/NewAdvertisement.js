import React, { Component } from 'react'
import superagent from 'superagent'
import './css/singleAD.css'
import LoginContainer from './login/LoginContainer'
import { connect } from 'react-redux'


class NewAdvertisement extends Component {
  state = {
    title: "",
    picture: "",
    description: "",
    price: "",
    email: "",
    phone: ""
  }

  handleChange = (event) => {
    console.log('event!!!!!',event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newAd = this.state 

    this.setState({
      title: "",
      picture: "",
      description: "",
      price: "",
      email: "",
      phone: "",
    })

    // const url = https://second-handshop.herokuapp.com/advertisements
    superagent
      .post('http://localhost:5000/advertisements')
      .set({ 'Authorization': 'Bearer ' + this.props.currentUser.token })
      .send(newAd)
      .then( result => {
        console.log('client: result', result)
        this.setState({submitted: true})  
      })
      .catch(console.error)

  }

  render() {
    if(!this.props.currentUser) return (
    <div>
      <h2>Login to publish your Advertisement</h2>
      <LoginContainer />
    </div>)

    return (
      <div style={{'marginTop': '100px', 'textAlign': 'center'}}>
        <h2>Publish Your Advertisement</h2>
        {this.props.currentUser.username}
        {this.state.submitted && <h2>Submitted!</h2>}
        <form onSubmit={this.handleSubmit}>
          <div style={{'marginTop': '50px'}}>
            <div className="single-card">
            <h2>Your Ad</h2>

            <p>Image:
            <input 
              type="url" 
              id="url"
              placeholder="https://example.com"
              pattern="https://.*" size="30"
              onChange={this.handleChange} 
              name="picture"
              value={this.state.picture}
            />
            </p>

            Title: 
              <input 
                type="text" 
                onChange={this.handleChange} 
                name="title"
                value={this.state.title}
              />
            

            <p className="price">Price: 
              <input type="number" min="1" step="any"
              onChange={this.handleChange}
              value={this.state.price} 
              name="price" />
            </p>
            <p>Description: 
              <input 
                type="textarea" 
                onChange={this.handleChange} 
                value={this.state.description}
                name="description"
              /></p>

            <p>Email: 
              <input 
                type="email" 
                onChange={this.handleChange}
                value={this.state.email} 
                name="email"
              /></p>
            <p>Phone: 
              <input 
                type="phone" 
                onChange={this.handleChange}
                value={this.state.phone} 
                name="phone"
                /></p>
            <p>
              <button onClick={this.handleSubmit}>Add your Advertisement</button></p>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(NewAdvertisement)