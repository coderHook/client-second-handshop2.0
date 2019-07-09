import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Ad #{props.ad.id}: "{props.ad.title}"</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit this advertisement accordingly to our terms of service.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="picture"
            label="Picture https://example.com"
            type="url"
            value={props.state.picture || props.ad.picture}
            onChange = {props.handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={props.state.title || props.ad.title}
            onChange = {props.handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="textArea"
            value={props.state.description || props.ad.description}
            onChange = {props.handleChange}            
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            value={props.state.price || props.ad.price}
            onChange = {props.handleChange}            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="number"
            value={props.state.phone || props.ad.phone}
            onChange = {props.handleChange}            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={props.state.email || props.ad.email}
            onChange = {props.handleChange}            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleEdit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}