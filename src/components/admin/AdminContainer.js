import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListOfAds from './ListOfAds'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { loadAds, deleteAd } from '../../actions/actions'
import DeleteDialog from './DeleteDialog'

class AdminContainer extends Component {
  state = {
    open: false
  }

  handleDelete = () => {
    console.log(`Deleting Ad: ${this.state.id}`)

    this.props.deleteAd(this.state.id) 

    this.setState({open: false})
  }

  handleOpen = (id, title) => {
    console.log('Handing OPEN', id)
    this.setState({
      open: true,
      id,
      title
    })
  }

  handleClose = () => {
    console.log('Handing CLOSE')
    this.setState({open: false})

  }

  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    console.log('whats in STORE:', this.props.ads)
    return (
      <div style={{'marginTop': '100px', 'textAlign': 'center'}}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">
            List of Advertisements Published
          </Typography>
          <div>
            { this.state.open && 
              <DeleteDialog 
                open={this.handleOpen} 
                close = {this.handleClose}
                delete = {this.handleDelete}
                title = {this.state.title}
                id = {this.state.id}
              />
            }
            <List> 
              { this.props.ads 
                ? this.props.ads.map(ad => 
                  <ListOfAds
                    key={ad.id.toString()} 
                    ad={ad} 
                    handleOpen={() => this.handleOpen(ad.id, ad.title)} 
                  />
                  )
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

export default connect(mapStateToPropt, { loadAds, deleteAd })(AdminContainer)