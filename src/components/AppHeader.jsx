import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const useStyles = makeStyles((theme) => ({
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

export default function ButtonAppBar() {
  const classes = useStyles();

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setMenuDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sheout
          </Typography>

          <AmplifySignOut />

          <IconButton
            color="inherit"
            aria-label="pay"
            onClick={() => {
              setCartDrawerOpen(true);
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDrawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
      ></CartDrawer>
      <MenuDrawer
        open={menuDrawerOpen}
        onClose={() => {
          setMenuDrawerOpen(false);
        }}
      ></MenuDrawer>
    </div>
  );
}
