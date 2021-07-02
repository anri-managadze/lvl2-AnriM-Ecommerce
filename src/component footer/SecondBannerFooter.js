import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from "@material-ui/icons/Email";
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundColor: '#2E2E2E'
    },
    col: {
        padding: '30px 100px',
        color: '#eeeded'
    },
    line: {
        width: '60px',
        height: '1px',
        backgroundColor: '#1266F1',
        marginTop: '10px'
    }
}));
const SecondBannerFooter = () => {

    const classes=useStyles();
    return (
        <Grid container className={classes.banner} >
            <Box className={classes.col} display='flex'>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <Box fontSize='20px'>About me </Box>
                        <Box className={classes.line}> </Box>
                        <Box marginTop='30px'>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Products </Box>
                        <Box className={classes.line}> </Box>
                        <Box marginTop='35px' fontSize='14.5px'>MDBootstrap </Box>
                        <Box marginTop='18px' fontSize='14.5px'>MDWordPress </Box>
                        <Box marginTop='18px' fontSize='14.5px'>BrandFlow </Box>
                        <Box marginTop='18px' fontSize='14.5px'>Bootstrap Angular </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Useful links</Box>
                        <Box className={classes.line}> </Box>
                        <Box marginTop='35px' fontSize='14.5px'>Your Account</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Become an Affiliate</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Shipping Rates</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Help</Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Contacts</Box>
                        <Box className={classes.line}> </Box>
                        <Box marginTop='35px' fontSize='14.5px'><MapIcon />New York, Avenue Street 10</Box>
                        <Box marginTop='18px' fontSize='14.5px'><PhoneIcon />042 876 836 908</Box>
                        <Box marginTop='18px' fontSize='14.5px'><EmailIcon /> company@example.com</Box>
                        <Box marginTop='18px' fontSize='14.5px'><ScheduleIcon />Monday - Friday: 10-17</Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default SecondBannerFooter;