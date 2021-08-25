import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import { useSelector } from "react-redux";
import {selectCart} from "../../store/products/productsSelector";
import Loader from "../../component/Loader";
import { selectLoading } from "../../store/user/userSelector";
import { useStyles } from "./CartPageStyle";
import CartProduct from "./component/CartProduct";
import CartPay from "./component/CartPay";
import CartShipping from "./component/CartShipping";
import CartPayMethod from "./component/CartPayMethod";
import CartDiscount from "./component/CartDiscount";

const CartPage = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const loading = useSelector(selectLoading);
  console.log(cart);

  return (
    <MainLayout>
      <Box className={classes.cart}>Shopping cart</Box>
      <Container>
        <Loader isLoading={loading}>
          {!!cart.hasOwnProperty("title")}
          <Grid container spacing={4}>

            <Grid item xs={12} md={8}>
              {!!localStorage.getItem("cart") && <CartProduct />}
            </Grid>
            <Grid item xs={12} md={4}>
              <CartPay />
              <CartDiscount />
              <CartShipping />
              <CartPayMethod />
            </Grid>
          </Grid>
        </Loader>
      </Container>
    </MainLayout>
  );
};

export default CartPage;
