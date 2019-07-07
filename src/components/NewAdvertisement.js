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
      .post('https://second-handshop.herokuapp.com/advertisements')
      .send(newAd)
      .then( res => console.log("Submitted !!", res) )
      .catch(console.error)

      this.setState({submitted: true})
  }

  render() {
    return (
      <div style={{'margin-top': '100px', 'text-align': 'center'}}>
        <h2>Publish Your Advertisement</h2>
        {this.state.submitted && <h2>Submitted!</h2>}
        <form onSubmit={this.handleSubmit}>
          <div style={{'margin-top': '50px'}}>
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
              <button onClick={this.handleSubmit} >Add your Add</button></p>
          </div>
        </div>
        </form>
      </div>
    )
  }
}
