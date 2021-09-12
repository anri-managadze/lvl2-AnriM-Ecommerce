import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {deleteProducts} from "../store/cart/cartActionCreator";
import {useDispatch} from "react-redux";

const useStyle=makeStyles({
    contained: {
        backgroundColor: "#F2F2F2",
        fontSize: "10px",
    }
})

const DeleteCartBtn = ({id}) => {
    const classes=useStyle();
    const dispatch=useDispatch();
    return (
        <Button
            variant="contained"
            color="default"
            startIcon={<DeleteForeverIcon />}
            className={classes.contained}
            onClick={() => {
                dispatch(deleteProducts(id))
            }}
        >
            Delete Item
        </Button>
    );
};

export default DeleteCartBtn;