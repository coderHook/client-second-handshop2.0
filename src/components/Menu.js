import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {setUser} from './../actions/actions'
import './Menu.css'


import MenuList from './MenuList'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ "textDecoration": "none", "color": "white" }}>
              Second Handshop 2.0
            </Link>
          </Typography>
            {
              !props.currentUser 
              ? <Link to="/login" style={{ "textDecoration": "none", "color": "white" }}>
                  <Button color="inherit">Login</Button>
                </Link>

              : <span className="welcome"><b>Hello, {props.currentUser.username}</b> <MenuList handleOff={() => props.setUser(null)}/></span>
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {setUser})(ButtonAppBar)