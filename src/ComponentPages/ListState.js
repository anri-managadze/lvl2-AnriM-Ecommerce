import React, {useState} from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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
    }
});

const ListState = () => {
    const classes=useStyles();
    const [data, setData]=useState([
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$100'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$200'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$300'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$400'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$500'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$600'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg',
            price: '$700'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
            price: '$800'
        },
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$900'
        }

    ]);
    return (
        <Grid container>
            {data.map((el) => {
                return (
                    <Grid item xs={12} sm={4} component={Box} p='5px' >
                        <Box className={classes.image} ><img src={el.image} alt='surati' className={classes.img}/></Box>
                        <Box className={classes.title} mt='10px'> {el.title}</Box>
                        <Box className={classes.price} mt='10px'> {el.price}</Box>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default ListState;