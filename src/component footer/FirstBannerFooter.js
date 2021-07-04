import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles(() => ({
    banner: {
        marginTop: '150px',
        backgroundColor: '#1266F1',
    },


}));


const FirstBannerFooter = () => {
    const classes=useStyles();

    return (
        <Grid container className={classes.banner}  >
            <Container >
                <Grid container >
                <Grid item sm={6}  component={Box} fontSize='18px' pt='20px' pb='20px' color='white'>
                    Get connected with us on social networks!
                </Grid>
                <Grid item sm={6} component={Box} display='flex' justifyContent='flex-end' pt='20px'  pb='20px' color='white'>
                        <Box marginRight='20px'><FacebookIcon /></Box>
                        <Box marginRight='20px'><TwitterIcon /></Box>
                        <Box marginRight='20px'><EmailIcon /></Box>
                        <Box marginRight='20px'><LinkedInIcon /></Box>
                        <Box marginRight='20px'><InstagramIcon /></Box>
                </Grid>
                </Grid>
            </Container>
        </Grid>


    );
};

export default FirstBannerFooter;