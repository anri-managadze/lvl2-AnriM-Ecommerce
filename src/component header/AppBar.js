import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Box, Container, Hidden} from "@material-ui/core";
import CustomizedBadges from "./CustomizedBadges";
import SplitButton from "./SplitButton";

const useStyles = makeStyles(() => ({
    header: {
        minWidth: '100%',
        padding: '0',
        position: "fixed",
        top: '0'
    },
    background: {
        backgroundColor:"white",
        color: 'black',
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold'
    },
    btnsignup: {
        width: '90px',
        height:'35px',
        border: '1px solid #42AAFF',
        borderRadius: '30px',
        color: '#42AAFF',
        fontSize: '11px',
        fontWeight: 'bold'
    }
}));

export default function HeaderAppBar() {
    const classes = useStyles();

    return (
        <Container className={classes.header}>
            <div >
                <AppBar position="static" className={classes.background}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            MDB
                        </Typography>
                        <Hidden xsDown >
                            <CustomizedBadges />
                            <Box>
                                <SplitButton />
                            </Box>
                            <Button color="inherit">Shop</Button>
                            <Button color="inherit">Contact</Button>
                            <Button color="inherit">Sign in</Button>
                            <Button color="inherit" className={classes.btnsignup}>Sign up</Button>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );
}