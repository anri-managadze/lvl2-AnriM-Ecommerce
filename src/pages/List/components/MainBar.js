import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginationn from "../../../page-component/Pagination";
import {makeStyles} from "@material-ui/core/styles";
import ListState from "./ListState";


const useStyles = makeStyles((theme) => ({
    media: {
        [theme.breakpoints.down('xs')] : {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px'
        }
    },

}));

const MainBar = () => {
    const classes=useStyles();
    return (
        <Container>
            <Grid container  >
                <Grid item xs={12} sm={6} className={classes.media}>
                    <ViewListIcon   />
                    <ViewModuleIcon />
                </Grid>
                <Grid item xs={12} sm={6} component={Box} justifyContent='flex-end' className={classes.media}>
                   <Paginationn />
                </Grid>
            </Grid>

            <ListState className={classes.media}/>

            <Grid container   >
                <Grid item xs={12} sm={6} className={classes.media}>
                    <ViewListIcon />
                    <ViewModuleIcon />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.media}>
                    <Paginationn />
                </Grid>
            </Grid>

        </Container>
    );
};

export default MainBar;