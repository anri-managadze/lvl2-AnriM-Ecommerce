import React, {useState} from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FullWidthTab from "./FullWidthTab";

const useStyles = makeStyles({
    img: {
        maxWidth: '90%',
        borderRadius: '5px',
    }
});

const SingleState = () => {
    const classes=useStyles();
    const [data, setData]=useState(
        {
            title: 'Blue denim shirt',
            image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg',
            price: '$100',
            category: 'SHIRTS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.',
            model: '\tShirt 5407X',
            Color: 'Red',
            Delivery: 'USA',
        }
    );
    return (

        <Container>
            <Grid container component={Box} padding='30px 0 30px 0'>
                <Grid item xs={12} sm={6} component={Box} >
                    <Box ><img src={data.image} alt='surati' className={classes.img}/></Box>
                </Grid>
                <Grid item xs={12} sm={6} component={Box} >
                    <Box  >
                        <Box  fontSize='20px' color='#4F4F4F' fontWeight='bold'> {data.title}</Box>
                        <Box  marginTop='20px' fontSize='13px'> {data.category}</Box>
                        <Box  marginTop='20px' fontSize='20px' color='#4F4F4F' fontWeight='bold'> {data.price}</Box>
                        <Box  marginTop='30px'> {data.description}</Box>
                        <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex'  >
                            <Box fontWeight='bold'> Model </Box>
                            <Box color='#7D5755' marginLeft='100px'>{data.model}</Box></Box>
                        <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex'>
                            <Box fontWeight='bold'>Color </Box>
                            <Box color='#7D5755' marginLeft='108px'>{data.Color}</Box></Box>
                        <Box marginTop='30px' fontSize='15px' color='#4F4F4F' display='flex'>
                            <Box fontWeight='bold'>Delivery </Box>
                            <Box color='#7D5755' marginLeft='90px'>{data.Delivery}</Box></Box>
                        <Box borderBottom='1px solid #E5E5E5' marginTop='30px'> </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box>
            <FullWidthTab />
            </Box>
        </Container>
    );
};

export default SingleState;