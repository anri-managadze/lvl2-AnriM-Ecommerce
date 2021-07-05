import React from 'react';
import MainLayout from "../layouts/MainLayout";
import cover from '../cover.jpg'
import {Box, Container, Grid} from "@material-ui/core";
import SideBar from "../component pages/SideBar";
import MainBar from "../component pages/MainBar";




const ListPage = () => {

    return (
        <MainLayout>
            <Box style={{ backgroundImage: `url(${cover})`, height: '400px',backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor:'rgba(0,0,0,0.6)'}}> </Box>
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