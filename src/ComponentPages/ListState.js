import React, {useState} from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import {SINGLE } from "../Roures";

const useStyles = makeStyles({
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        maxWidth: '100%',
        borderRadius: '5px',
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
        textDecoration: 'none'
    }
});

const ListState = () => {
    const classes=useStyles();
    const [data, setData]=useState([
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$100',
            id: 1
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$200',
            id: 2
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$300',
            id: 3
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$400',
            id: 4
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$500',
            id: 5
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$600',
            id: 6
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$700',
            id: 7
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$800',
            id: 8,
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$900',
            id: '9'
        }

    ]);
    return (
        <Grid container>
            {data.map((el) => {
                return (
                    <Grid item xs={12} sm={4} component={Box} p='5px' >
                        <Link to={SINGLE.replace(':id', el.id)} className={classes.list} >
                            <Box className={classes.image} ><img src={el.image} alt='surati' className={classes.img}/></Box>
                            <Box className={classes.title} mt='10px'> {el.title}</Box>
                            <Box className={classes.price} mt='10px'> {el.price}</Box>
                        </Link>
                    </Grid>

                )
            })}
        </Grid>
    );
};

export default ListState;