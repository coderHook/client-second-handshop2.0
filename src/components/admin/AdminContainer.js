import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListOfAds from './ListOfAds'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { loadAds } from '../../actions/actions'

class AdminContainer extends Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    console.log('whats in STORE:', this.props.ads)
    return (
      <div style={{'margin-top': '100px', 'text-align': 'center'}}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">
            List of Advertisements Published
          </Typography>
          <div>
            <List> 
              { this.props.ads 
                ? this.props.ads.map(ad => <ListOfAds ad={ad} />)
                : 'Loading...'
              }
            </List>
          </div>
        </Grid>
      </div>
    )
  }
}

const mapStateToPropt = (state) => {
  return {
    ads: state.advertisements
  }
}

export default connect(mapStateToPropt, {loadAds})(AdminContainer)