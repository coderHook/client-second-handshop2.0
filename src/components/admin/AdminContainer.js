import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListOfAds from './ListOfAds'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { loadAds, deleteAd } from '../../actions/actions'
import { editAd } from '../../actions/adminActions'
import DeleteDialog from './DeleteDialog'
import EditDialog from './EditDialog'
import request from 'superagent'


class AdminContainer extends Component {
  state = {
    open: false,
    ad: {}
  }

  handleDelete = () => {
    console.log(`Deleting Ad: ${this.state.id}`)

    this.props.deleteAd(this.state.id) 

    this.setState({openDelete: false})
  }

  handleEdit = () => {
    const editedAd = this.state.ad
    this.setState({open: false})

    console.log('Editing:', editedAd)

    // request
    // .put(`https://second-handshop.herokuapp.com/advertisements/${editedAd.id}`)
    // .send(editAd)
    // .then(response => console.log('CLient', response))
    // .catch(console.error)

    this.props.editAd(editedAd)
  }

  handleChange(event) {  
    this.setState({
      ad: {
        ...this.state.ad,
        [event.target.id]: event.target.value
      }
    })
  }

  handleOpen = (ad, option) => {
    console.log('Handing OPEN', option, ad)
    this.setState({
      open: true,
      ad,
      option
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
    return (
      <div className="listAds-Admin" style={{'marginTop': '100px', 'textAlign': 'center'}}>
        <Grid item xs={12} md={6} style={{'margin': '0 auto'}} >
          <Typography variant="h6">
            List of Advertisements Published
          </Typography>

          <div>
            { this.state.open 
                ? this.state.option === "delete"
                  ? <DeleteDialog 
                      open={this.handleOpen} 
                      close = {this.handleClose}
                      delete = {this.handleDelete}
                      title = {this.state.ad.title}
                      id = {this.state.ad.id}
                    />
                    : <EditDialog 
                      open={this.state.open}
                      close = {this.handleClose}
                      ad = {this.state.ad}
                      state = {this.state}
                      handleEdit = {this.handleEdit}
                      handleChange = {(e) => this.handleChange(e)}
                      />
                : null
            }

            <List> 
              { this.props.ads 
                ? this.props.ads.map(ad => 
                  <ListOfAds
                    key={ad.id.toString()} 
                    ad={ad} 
                    handleOpen={(ad, option) => this.handleOpen(ad, option)} 
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

export default connect(mapStateToPropt, { loadAds, deleteAd, editAd })(AdminContainer)