import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Box, Container,  Hidden} from "@material-ui/core";
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

    icon: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

}));

export default function HeaderAppBar() {
    const classes = useStyles();

    return (
        <Container className={classes.header}>
                <AppBar position="static"  component={Box} color='black' bgcolor='white' display='flex' flexDirection='row' justifyContent='space-between' padding='10px 50px 0 50px'>
                            <Box >
                                <Typography variant="h6"  >
                                    MDB
                                </Typography>
                            </Box>
                            <Box >
                                <Hidden xsDown>
                                    <AppBarMenu display={'flex'} justifyContent={'flex-end'} />
                                </Hidden>
                                <Hidden smUp>
                                    <ListMenu text={<MenuIcon className={classes.icon} />} flexDirection={'row-reverse'} width={'250px'} justifyContent={'space-between'} display={'flex'}>
                                        <AppBarMenu display={'column'} textAlign={'center'} />
                                    </ListMenu>
                                </Hidden>
                            </Box>
                </AppBar>
        </Container>
    );
}