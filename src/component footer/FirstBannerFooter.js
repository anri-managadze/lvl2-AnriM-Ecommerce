import React from 'react';
import {Box, Grid} from "@material-ui/core";
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
    col: {
        padding: '20px 100px',
        color: 'white'
    },

}));


const FirstBannerFooter = () => {
    const classes=useStyles();

    return (
        <Grid container className={classes.banner}  >
                <Grid item xs={12} sm={6} className={classes.col} >
                    <Box fontSize='18px'>Get connected with us on social networks!</Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.col} >
                    <Box display='flex' justifyContent='flex-end' >
                        <Box marginRight='20px'><FacebookIcon /></Box>
                        <Box marginRight='20px'><TwitterIcon /></Box>
                        <Box marginRight='20px'><EmailIcon /></Box>
                        <Box marginRight='20px'><LinkedInIcon /></Box>
                        <Box marginRight='20px'><InstagramIcon /></Box>
                    </Box>
                </Grid>
        </Grid>


    );
};

export default FirstBannerFooter;