import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import Quantity from "../../../component/ Quantity";
import { useStyles } from "./CartProductStyle";
import { useSelector } from "react-redux";
import {selectCart, selectCounter} from "../../../store/cart/cartSelector";
import DeleteCartBtn from "../../../component/DeleteCartBtn";



const CartProduct = () => {
  const classes = useStyles();
  const cart = useSelector(selectCart);
  const counter = useSelector(selectCounter);
  console.log(cart)


  return (
    <Card className={classes.root}>
      {!!cart.length && cart.map((cart) => {
        return (
            <Grid container >
               <Grid item xs={12} md={3}>
                 {" "}
                 <img src={cart.image} alt="surati" className={classes.img} />
               </Grid>
                <Grid item xs={6} md={6}>
                  <CardContent>
                    <Box className={classes.title}>{cart.title}</Box>
                    <Box className={classes.pos}>{cart.category}</Box>
                    <Box className={classes.pos}>Color:</Box>
                    <Box className={classes.pos} color="textSecondary">
                      Size:
                    </Box>
                  </CardContent>
                  <CardActions>
                     <DeleteCartBtn id={cart.id}/>
                  </CardActions>
                </Grid>
                <Grid item xs={6} md={3} component={Box} display="flex" flexDirection="column" alignItems="center">
                    <Box>
                      <Quantity />
                    </Box>
                    <Box>(Note, 1 piece)</Box>
                    <Box marginTop="160px" fontSize="20" fontWeight="bold" color="#4F4F4F">
                      $ {counter * cart.price}
                    </Box>
                </Grid>
            </Grid>
                );
      })}
    </Card>
  );
};

export default CartProduct;
