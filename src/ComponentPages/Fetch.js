import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";


const useStyles = makeStyles({
    image: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#EAEAEA",
        padding: '20px',
        borderRadius: '5px'
    },
    img: {
        maxWidth: '100%',

    },
    title:  {
        color: '#4F4F4F',
        fontSize: '20px'
    },
    price: {
        color: '#4F4F4F',
        fontSize: '20px'
    }
});

const Fetch = () => {
    const classes=useStyles();
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(el => {
                setData((el));
                console.log((el))
            })
    },[]);


    return (
        <Box>
            {(typeof data != 'undefined') ? (
                <Grid container>
                    {data.map((el, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={4} component={Box} p='5px' >
                                <Box className={classes.image} ><img src={el.image} alt='surati' className={classes.img}/></Box>
                                <Box className={classes.title} mt='10px'> {el.title}</Box>
                                <Box className={classes.price} mt='10px'>$ {el.price}</Box>
                            </Grid>
                        )
                    })}
                </Grid>
            ) : (' ')}
        </Box>

    )
}

export default Fetch;