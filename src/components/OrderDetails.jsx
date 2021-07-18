import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 1200,
  },
}));

export default function OrderDetails() {
  const classes = useStyles();

  const orderDetails = useSelector((state) => state.orders.orderDetails);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography align="left" variant="h2">
          Order Details :{" "}
        </Typography>
        <GridList
          className={classes.gridList}
          spacing={20}
          cellHeight={300}
          cellWidth={300}
          cols={4}
        >
          {orderDetails?.products?.items?.map(({ product }) => (
            <GridListTile key={product.pictureUrl} cols={product.cols || 1}>
              <img
                src={`${product.pictureUrl}`}
                alt={product.name}
                loading="lazy"
              />
              <GridListTileBar
                title={product.name}
                subtitle={<span>price: {product.price}</span>}
              />
            </GridListTile>
          )) || null}
        </GridList>
      </Container>
    </React.Fragment>
  );
}
