import React from 'react';
import {Button, makeStyles} from "@material-ui/core";


const useStyle=makeStyles({
    containedPrimary: {
        color: "white",
        fontSize: "10px",
        padding: "10px 20px",
        backgroundColor: "#1266F1",
    },
    root: {
        color: "#1266F1",
        fontSize: "20px",
    },
})


const BuyNowBtn = () => {
    const classes=useStyle();
    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.containedPrimary}
        >
            buy Now
        </Button>
    );
};

export default BuyNowBtn;