import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Box, Container, Hidden} from "@material-ui/core";
import AppBarMenu from "./AppBarMenu";
import ListMenu from "../component pages/ListMenu";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    header: {
        minWidth: '100%',
        padding: '0',
        position: "fixed",
        top: '0',
        zIndex: '1',
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold'
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

}));

export default function HeaderAppBar() {
    const classes = useStyles();

    return (
        <Container className={classes.header}>
            <Box jus>
                <AppBar position="static"  component={Box} color='black' bgcolor='white' >
                    <Toolbar >
                        <Typography variant="h6" className={classes.title} >
                            MDB
                        </Typography>
                        <Hidden xsDown>
                            <AppBarMenu />
                        </Hidden>
                        <Hidden smUp>
                            <ListMenu text={<MenuIcon className={classes.icon} />}>
                                <AppBarMenu />
                            </ListMenu>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
}