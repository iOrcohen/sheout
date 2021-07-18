import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateOrder } from "../graphql/subscriptions";
import OrderConfirmedDialog from "./OrderConfirmedDialog";

const useStyles = makeStyles({
  list: {
    width: 600,
  },
});

function CartDrawer({ open, onClose }) {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart);

  const [orderConfirmedOpen, setOrderConfirmedOpen] = useState(false);

  const saveOrder = async () => {
    const userSession = await Auth.currentSession();
    const userEmail = userSession.idToken.payload.email;

    const orderSaved = await API.post("orderService", "/item", {
      body: { userEmail },
    });

    const productsRequestToSave = [];

    cart.products.forEach((productData) => {
      productsRequestToSave.push(
        API.post("orderService", "/saveProductToOrder", {
          body: {
            orderId: orderSaved.body.data.createOrder.id,
            ...productData,
          },
        })
      );
    });

    const results = await Promise.all(productsRequestToSave);

    console.log(results);
  };

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateOrder)).subscribe(
      {
        next: ({ provider, value }) => {
          console.log({ provider, value });
          setOrderConfirmedOpen(true);
        },
        error: (error) => console.warn(error),
      }
    );
    // Specify how to clean up after this effect:
    return function cleanup() {
      subscription.unsubscribe();
    };
  });

  const ProductsList = () => (
    <div role="presentation" className={classes.list}>
      <List>
        <ListItem>
          <Typography gutterBottom={true} variant="h6">
            Shopping Cart
          </Typography>
        </ListItem>
        <Divider />
        {cart.products?.length
          ? cart.products.map((productData, index) => (
              <ListItem button key={productData.product.name}>
                <ListItemIcon>
                  <img
                    src={`${productData.product.pictureUrl}`}
                    alt={productData.product.name}
                    loading="lazy"
                    width="50px"
                    height="50px"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${productData.product.name}`}
                  secondary={productData.quantity}
                />
              </ListItem>
            ))
          : null}
        <Divider />
        <ListItem>
          <Grid container>
            <Grid item xs={4}>
              <Button variant="contained" color="default">
                Clear cart
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                onClick={() => {
                  saveOrder();
                }}
                variant="contained"
                color="default"
              >
                Continue to payment
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <ProductsList></ProductsList>
      </Drawer>
      <OrderConfirmedDialog
        open={orderConfirmedOpen}
        onClose={() => setOrderConfirmedOpen()}
      ></OrderConfirmedDialog>
    </div>
  );
}

export default CartDrawer;
