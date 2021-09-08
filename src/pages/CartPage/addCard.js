import React from 'react';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import {setCart} from "../../store/cart/cartActionCreator";

const AddCard = ({data}) => {
    const dispatch=useDispatch();
    console.log(data)
    return (
        <>
            <Button
                variant="contained"
                color="default"
                startIcon={<AddShoppingCartIcon/>}
                onClick={() => {
                    dispatch(
                        setCart({
                            data
                        }),
                    )
                }}
            >
                ADD TO CART
            </Button>
        </>
    );
};

export default AddCard;