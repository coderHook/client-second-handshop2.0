import React, { Component } from 'react'
import Login from './Login'
import { loginUser } from '../../actions/actions'
import { connect } from 'react-redux'


class LoginContainer extends Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state

    this.props.loginUser(user)
  }

  render() {
    return (
      <Login 
        handleChange = { this.handleChange }
        handleSubmit = { this.handleSubmit }
      />
    )
  }
}

export default connect(null, { loginUser })(LoginContainer)