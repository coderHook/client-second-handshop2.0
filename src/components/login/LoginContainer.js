import React, { Component } from 'react'
import Login from './Login'
import { loginUser } from '../../actions/actions'
import { connect } from 'react-redux'
import AdminContainer from './../admin/AdminContainer'


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
    if (this.props.currentUser) {
      if(this.props.currentUser.username === 'admin') return <AdminContainer />
      else return <h1>User Dashboard</h1>
    } else {
        return (
          <Login 
            handleChange = { this.handleChange }
            handleSubmit = { this.handleSubmit }
          />
        )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {loginUser})(LoginContainer)