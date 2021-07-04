import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from "@material-ui/icons/Email";
import ScheduleIcon from '@material-ui/icons/Schedule';


const SecondBannerFooter = () => {

    return (
        <Grid container component={Box} bgcolor='#2E2E2E' >
            <Container >
                <Grid container component={Box} pt='30px' pb='30px' color='#eeeded'>
                    <Grid item xs={12} sm={3}>
                        <Box fontSize='20px'>About me </Box>
                        <Box width='60px' height='1px' bgcolor='#1266F1' mt='10px'> </Box>
                        <Box marginTop='30px'>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Products </Box>
                        <Box width='60px' height='1px' bgcolor='#1266F1' mt='10px'> </Box>
                        <Box marginTop='35px' fontSize='14.5px'>MDBootstrap </Box>
                        <Box marginTop='18px' fontSize='14.5px'>MDWordPress </Box>
                        <Box marginTop='18px' fontSize='14.5px'>BrandFlow </Box>
                        <Box marginTop='18px' fontSize='14.5px'>Bootstrap Angular </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Useful links</Box>
                        <Box width='60px' height='1px' bgcolor='#1266F1' mt='10px'> </Box>
                        <Box marginTop='35px' fontSize='14.5px'>Your Account</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Become an Affiliate</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Shipping Rates</Box>
                        <Box marginTop='18px' fontSize='14.5px'>Help</Box>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <Box fontSize='20px'>Contacts</Box>
                        <Box width='60px' height='1px' bgcolor='#1266F1' mt='10px'> </Box>
                        <Box marginTop='35px' fontSize='14.5px'><MapIcon />New York, Avenue Street 10</Box>
                        <Box marginTop='18px' fontSize='14.5px'><PhoneIcon />042 876 836 908</Box>
                        <Box marginTop='18px' fontSize='14.5px'><EmailIcon /> company@example.com</Box>
                        <Box marginTop='18px' fontSize='14.5px'><ScheduleIcon />Monday - Friday: 10-17</Box>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default SecondBannerFooter;