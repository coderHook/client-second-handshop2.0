import React from 'react'
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
import {connect} from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


function Admin() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);

    return (
      <div style={{'marginTop': '100px', 'textAlign': 'center'}}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            List of Advertisements Published
          </Typography>
          <div>
            <List dense={dense}>
              {generate( 
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction style={{'margin': '0 10px'}}>
                  <IconButton aria-label="Edit" style={{'margin-right': '10px'}}>
                      <EditIcon />
                    </IconButton>

                    <IconButton edge="end" aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </div>
    )
}

const mapStateToPropt = (state) => {
  return {
    ads: state.advertisements
  }
}

export default connect(mapStateToPropt, null)(Admin)