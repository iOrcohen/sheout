import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TocIcon from "@material-ui/icons/Toc";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../actions/ordersActions";
import { VIEW_ORDER } from "../actions/actionsTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    marginTop: "8px",
  },
}));

export default function OrderList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const orders = useSelector((state) => state.orders.orders);

  const handleListItemClick = (order, index) => {
    setSelectedIndex(index);
    dispatch({ type: VIEW_ORDER, payload: order });
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <ListItemIcon>
            <TocIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        {orders.map((order, index) => (
          <ListItem
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(order, index)}
          >
            <ListItemText inset primary={order.createdAt} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
