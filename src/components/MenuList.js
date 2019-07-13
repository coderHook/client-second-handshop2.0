import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WishIcon from '@material-ui/icons/Loyalty';
import ListIcon from '@material-ui/icons/List';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import PowerSetting from '@material-ui/icons/power_settings_new';
import { Link } from 'react-router-dom'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton edge="start" 
        color="inherit" aria-label="Menu" 
        style={{"margin": '10px'}}
        onClick={handleClick}
        >
            <MenuIcon 
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
            />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
        <StyledMenuItem>
          <ListItemIcon>
          <i className="material-icons"> dashboard </i>
          </ListItemIcon>
          <Link to="/admin">
            <ListItemText primary="Dashboard" onClick={handleClose} />
          </Link>
        </StyledMenuItem>
        }


        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Link to="/publishAd">
            <ListItemText primary="Add Advertisement" onClick={handleClose} />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <Link to="/">
            <ListItemText primary="List of Ads" onClick={handleClose} />
          </Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <WishIcon />
          </ListItemIcon>
          <ListItemText primary="WishList" />
        </StyledMenuItem>

        <StyledMenuItem onClick={props.handleOff}>
          <ListItemIcon>
          <i className="material-icons">
            power_settings_new
          </i>          
        </ListItemIcon>
          <ListItemText primary="Disconnect" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}