import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import {useStyles} from "./CartShippingStyle";

const CartShipping = () => {
    const classes=useStyles();
    return (
        <Card className={classes.main}>
            <CardContent className={classes.title}>Expected shipping delivery</CardContent>
            <CardContent className={classes.p}>Thu., 12.03. - Mon., 16.03.</CardContent>
        </Card>
    );
};

export default CartShipping;