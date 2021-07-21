import React from 'react';
import MainLayout from "../layouts/MainLayout";
import {Box} from "@material-ui/core";
import {useStyles} from "../SignUp-component/SignUpStyle";
import SignUpForm from "../SignUp-component/SignUpForm";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {Link} from "react-router-dom";


const SignUp = () => {
    const classes=useStyles();
    return (
        <MainLayout>
            <Box className={classes.banner}>Sign Up</Box>
            <Box className={classes.cont}>
                <Box>
                    <SignUpForm />
                </Box>
                <Box textAlign='center' marginTop='25px'>
                    <Box marginTop='25px'>or sign in with:</Box>
                    <Box padding='25px'>
                        <FacebookIcon  className={classes.iconfa} />
                        <TwitterIcon  className={classes.icontw} />
                        <LinkedInIcon  className={classes.iconin} />
                        <GitHubIcon  className={classes.icongit} />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.footer}>By clicking Sign up you agree to our <Link to='#' className={classes.link}>terms of service </Link></Box>
        </MainLayout>
    );
};

export default SignUp;