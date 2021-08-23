import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import MainLayout from "../layouts/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../store/products/productsSelector";
import { setLoading } from "../store/user/userActionsCreator";
import { Api } from "../api";
import { setCart } from "../store/products/productsActionCreator";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader";
import { selectLoading } from "../store/user/userSelector";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Quantity from "./SinglePage/component/ Quantity";

const useStyles = makeStyles(() => ({
  cart: {
    minWidth: "100%",
    zIndex: "1",
    backgroundColor: "#FBFBFB",
    padding: "100px 0 50px 0",
    textAlign: "center",
    fontSize: "30px",
  },
  img: {
    width: "80%",
  },
  root: {
    display: "flex",
  },
  root2: {
    display: "flex",
    flexDirection: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  console.log(cart);

  useEffect(() => {
    dispatch(setLoading(true));
    Api.getSingleProduct(id)
      .then((json) => {
        dispatch(setCart(json));

        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => dispatch(setLoading(false)));
  }, [id]);

  return (
    <MainLayout>
      <Box className={classes.cart}>Shopping cart</Box>
      <Container>
        <Loader isLoading={loading}>
          {!!cart.hasOwnProperty("image")}
          <Grid container>
            <Grid item xs={12} md={8}>
              <Card className={classes.root}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    {" "}
                    <img
                      src={cart.image}
                      alt="surati"
                      className={classes.img}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <CardContent>
                      <Box className={classes.title}>{cart.title}</Box>
                      <Box className={classes.pos}>Color:</Box>
                      <Box className={classes.pos} color="textSecondary">
                        Size:
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button>
                        <DeleteForeverIcon />
                        Remove Item
                      </Button>
                    </CardActions>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box>
                      <Quantity />
                    </Box>
                    <Box>(Note, 1 piece)</Box>
                    <Box marginTop="100px">$ {cart.price}</Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.root2}>
                <CardContent>
                  <Box className={classes.title}>The total amount of</Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>Temporary amount</Box>
                    <Box>{cart.price}</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>Shipping</Box>
                    <Box>Free</Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>The total amount of (including VAT)</Box>
                    <Box> $</Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button>Go To Checkout</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Loader>
      </Container>
    </MainLayout>
  );
};

export default CartPage;
