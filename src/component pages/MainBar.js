import React from 'react';
import {Container, Grid} from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginationn from "./Pagination";



const MainBar = () => {
    return (
        <Container>
            <Grid container  >
                <Grid item xs={12} sm={6} >
                    <ViewListIcon   />
                    <ViewModuleIcon />
                </Grid>
                <Grid item xs={12} sm={6} justify='flex-end'>
                   <Paginationn />
                </Grid>
            </Grid>

            <Grid container   >
                <Grid item xs={12} sm={6}>
                    <ViewListIcon />
                    <ViewModuleIcon />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paginationn />
                </Grid>
            </Grid>

        </Container>
    );
};

export default MainBar;