import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import cover from '../cover.jpg'
import {Box, Container, Grid} from "@material-ui/core";
import SideBar from "../ComponentPages/SideBar";
import MainBar from "../ComponentPages/MainBar";




const ListPage = () => {

    return (
        <MainLayout>
            <Box style={{ backgroundImage: `url(${cover})`, height: '400px',backgroundPosition: 'center', backgroundSize: 'cover'}}> </Box>
                    <Container>
                        <Grid container component={Box}  mt='50px'>
                            <Grid item xs={12} sm={3}> <SideBar /> </Grid>
                            <Grid item xs={12} sm={9}> <MainBar /> </Grid>
                        </Grid>
                    </Container>
        </MainLayout>
    );
};

export default ListPage;