import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  list: {
    width: 400,
  },
});

function MenuDrawer({ open, onClose }) {
  const classes = useStyles();

  return (
    <div role="presentation">
      <Drawer anchor="left" open={open} onClose={() => onClose()}>
        <List className={classes.list}>
          <ListItem>
            <Typography gutterBottom={true} variant="h2">
              Menu
            </Typography>
          </ListItem>
          <Divider />

          <ListItem button>
            <Typography gutterBottom={true} variant="h6">
              <Link href="/">Main page</Link>
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography gutterBottom={true} variant="h6">
              <Link href="/orders">My orders</Link>
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
