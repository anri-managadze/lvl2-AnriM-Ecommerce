import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import bank from '../../../bank.jpg'
import {useStyles} from "./CartPayMethodStyle";


const CartPayMethod = () => {
    const classes=useStyles()
    return (
        <Card className={classes.main}>
            <CardContent className={classes.title}>We accept</CardContent>
            <CardContent>
               <img src={bank} alt='surati' className={classes.image}/>
            </CardContent>
        </Card>
    );
};

export default CartPayMethod;