import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { blue } from "@material-ui/core/colors";

export default function OrderConfirmedDialog(props) {
  const { open, onClose } = props;

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Order Confirmed !</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">Thank you for ordering :)</Typography>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => {
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Yalla bye
        </Button>
      </DialogActions>
    </Dialog>
  );
}
