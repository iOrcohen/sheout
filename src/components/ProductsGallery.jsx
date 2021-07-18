import React, { useEffect, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";
import { VIEW_PRODUCT } from "../actions/actionsTypes";
import { fetchProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import AddToCartDialog from "./AddToCartDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
  },
}));

function ProductsGallery(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  const [productDialogOpen, setProductDialogOpen] = useState(false);

  const handleClickProduct = ({ open, product }) => {
    dispatch({ type: VIEW_PRODUCT, payload: { product } });
    setProductDialogOpen(open);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <GridList
        spacing={20}
        cellHeight={300}
        className={classes.gridList}
        cols={4}
      >
        {products.length
          ? products.map((item) => (
              <GridListTile key={item.pictureUrl} cols={item.cols || 1}>
                <img
                  src={`${item.pictureUrl}`}
                  alt={item.name}
                  loading="lazy"
                />
                <GridListTileBar
                  title={item.name}
                  subtitle={<span>price: {item.price}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${item.name}`}
                      className={classes.icon}
                      onClick={() =>
                        handleClickProduct({ open: true, product: item })
                      }
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))
          : null}
      </GridList>
      <AddToCartDialog
        open={productDialogOpen}
        onClose={() => handleClickProduct({ open: false })}
      ></AddToCartDialog>
    </div>
  );
}

export default ProductsGallery;
