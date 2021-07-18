import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ADD_TO_CART } from "../actions/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
}));

function AddToCartDialog({ open, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currQuantity, setCurrQuantity] = useState(1);
  const product = useSelector((state) => state.product.product);

  return (
    <>
      <Dialog
        open={open}
        fullWidth={true}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add To Cart</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                className={classes.img}
                src={`${product?.pictureUrl}`}
                alt={product?.name}
                loading="lazy"
              />
            </Grid>

            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">{product?.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Pay only {product?.price} Shekels!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    id="quantity"
                    label="quantity"
                    type="number"
                    defaultValue={currQuantity}
                    onChange={(e) => setCurrQuantity(parseInt(e.target.value))}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: ADD_TO_CART,
                payload: { product, quantity: currQuantity },
              });
              onClose();
            }}
            color="primary"
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddToCartDialog;
