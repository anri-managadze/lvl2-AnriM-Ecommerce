import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import {SINGLE} from "../Roures";
import {Link} from "react-router-dom";
import Loader from "./Loader";


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
    },
    list: {
        textDecoration: 'none',
    }
});

const ListState = () => {
    const classes=useStyles();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(el => {
                setData((el));
                console.log((el))
            })
            .catch(err=> {
                console.log(err)})
            .finally(()=>setLoading(false))
    },[]);

    return (
        <Box>
            <Loader isLoading={loading}>
            {(typeof data != 'undefined') ? (
                <Grid container>
                    {data.map((el, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={4} component={Box} p='5px' >
                                <Link to={SINGLE.replace(':id', el.id)} className={classes.list} >
                                    <Box className={classes.image} ><img src={el.image} alt='surati' className={classes.img}/></Box>
                                    <Box className={classes.title} mt='10px'> {el.title}</Box>
                                    <Box className={classes.price} mt='10px'>$ {el.price}</Box>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            ) : (' ')}
            </Loader>
        </Box>

    )
}



export default ListState;