import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListOfAds extends Component {

  render() {
    return (
      <ListItem>
        <ListItemAvatar className="d-none">
          <Avatar>
            <img src={this.props.ad.picture} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.ad.title}
          secondary={this.props.ad.description}
        />
        <ListItemSecondaryAction style={{'margin': '0 10px'}}>
        <IconButton aria-label="Edit" style={{'marginRight': '10px'}} onClick={() => this.props.handleOpen(this.props.ad, "edit")}>
            <EditIcon />
          </IconButton>

          <IconButton edge="end" aria-label="Delete" 
            onClick={() => this.props.handleOpen(this.props.ad, "delete")}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
