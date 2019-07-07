import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class ListOfAds extends Component {
  render() {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={this.props.ad.picture} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.ad.title}
          secondary={this.props.ad.description}
        />
        <ListItemSecondaryAction style={{'margin': '0 10px'}}>
        <IconButton aria-label="Edit" style={{'margin-right': '10px'}}>
            <EditIcon />
          </IconButton>

          <IconButton edge="end" aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}
