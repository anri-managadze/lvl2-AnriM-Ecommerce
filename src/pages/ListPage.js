import React from 'react';
import MainLayout from "../layouts/MainLayout";
import cover from '../cover.jpg'
import {Box, Grid} from "@material-ui/core";
import SideBar from "../component pages/SideBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    col: {
        padding: '55px 100px',
    },

}));

const ListPage = () => {
    const classes=useStyles();
    return (
        <MainLayout>
            <Box style={{ backgroundImage: `url(${cover})`, height: '400px',backgroundPosition: 'center', backgroundSize: 'cover' }}> </Box>
            <Grid container className={classes.col}>
                <Grid item xs={12} sm={4}> <SideBar /> </Grid>
                <Grid item xs={12} sm={8}>s </Grid>
            </Grid>
        </MainLayout>
    );
};

export default ListPage;