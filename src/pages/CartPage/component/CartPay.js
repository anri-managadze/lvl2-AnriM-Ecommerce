import React from 'react';
import {Box, Button, Card, CardActions, CardContent} from "@material-ui/core";
import {useSelector} from "react-redux";

import {useStyles} from "./CartPayStyle";
import {selectCart, selectCounter} from "../../../store/cart/cartSelector";

const CartPay = () => {
    const classes=useStyles();
    const cart = useSelector(selectCart);
    const counter=useSelector(selectCounter)

    return (
            <Card className={classes.root2}>
                <CardContent >
                    <Box className={classes.title}>The total amount of</Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box className={classes.p}>Temporary amount</Box>
                        <Box className={classes.p}>$ {counter * cart.price}</Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" >
                        <Box className={classes.p}>Shipping 15% </Box>
                        <Box className={classes.p}>$ {Math.round(counter * cart.price * 15 /100)}</Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" className={classes.p2}>
                        <Box>The total amount of <br/> (including VAT)</Box>
                        <Box> $ {Math.round((counter * cart.price)+(counter * cart.price * 15 /100))}</Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button className={classes.btn}>Go To Checkout</Button>
                </CardActions>
            </Card>
    );
};

export default CartPay;