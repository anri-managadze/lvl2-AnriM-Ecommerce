import React from 'react';
import MainLayout from "../Layouts/MainLayout";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SingleState from "../ComponentSinglePage/SingleState";

const useStyles = makeStyles(() => ({
    prod: {
        minWidth: '100%',
        zIndex: '1',
        backgroundColor: '#FBFBFB',
        padding: '100px 0 50px 0',
        textAlign: 'center',
        fontSize: '30px'
    },

}));


const SinglePage = () => {
    const classes=useStyles();
    return (
        <MainLayout>
            <Box className={classes.prod}>Product page</Box>
            <SingleState />
        </MainLayout>
    );
};

export default SinglePage;