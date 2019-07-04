import React, { Component } from 'react'
import superagent from 'superagent'
import './css/singleAD.css'

export default class NewAdvertisement extends Component {
  state = {
  }

  handleChange = (event) => {
    console.log('event!!!!!',event.target.name)
    this.setState({
      [event.target.name]: event.target.value.trim()
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

    superagent
      .post('http://localhost:5000/advertisements')
      .send(newAd)
      .then( res => console.log(res) )
      .catch(console.error)


  }

  render() {
    return (
      <div>
        <h1>Publish Your Advertisement</h1>
        {this.state.title && this.state.title}
        <form onSubmit={this.handleSubmit}>
          <div className="card-wrapper">
            <div className="single-card">

            <h2>Set an image for your product: </h2>
            <input 
              type="url" 
              id="url"
              placeholder="https://example.com"
              pattern="https://.*" size="30"
              onChange={this.handleChange} name="picture"
            />

            <h1>Title: <input type="text" onChange={this.handleChange} name="title"/></h1>

            <p className="price">Price: 
              <input type="number" min="1" step="any"
              onChange={this.handleChange} name="price" />
            </p>
            <p>Description: 
              <input 
                type="textarea" 
                onChange={this.handleChange} name="description"
              /></p>

            <p>Email: 
              <input 
                type="email" 
                onChange={this.handleChange} name="email"
              /></p>
            <p>Phone: 
              <input 
                type="phone" 
                onChange={this.handleChange} name="phone"
                /></p>
            <p>
              <button onSubmit={this.handleSubmit} >Add your Add</button></p>
          </div>
        </div>
        </form>
      </div>
    )
  }
}
