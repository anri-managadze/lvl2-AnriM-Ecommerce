import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import {setCart} from "../store/cart/cartActionCreator";


const useStyle=makeStyles({
    contained: {
        backgroundColor: "#F2F2F2",
        fontSize: "10px",
    }
})

const AddCartBtn = ({data}) => {
    const dispatch=useDispatch();
    const classes=useStyle();

    return (
        <>
            <Button
                variant="contained"
                color="default"
                startIcon={<AddShoppingCartIcon/>}
                className={classes.contained}
                onClick={() => {
                    dispatch(
                        setCart({
                            title: data.title,
                            price: data.price,
                            id: data.id,
                            image: data.image,
                        }),
                    )
                }}
            >
                ADD TO CART
            </Button>
        </>
    );
};

export default AddCartBtn;