import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box } from "@material-ui/core";
import { useStyles } from "./components/SignInStyle";
import SignInForm from "./components/SignInForm";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../roures";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SignIn = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Box className={classes.banner}>Sign In</Box>
      <Box className={classes.cont}>
        <Box>
          <SignInForm />
        </Box>
        <Box textAlign="center" marginTop="25px">
          <Box marginTop="25px">
            Not a member?{" "}
            <Link to={SIGN_UP} className={classes.link}>
              {" "}
              Register
            </Link>
          </Box>
          <Box marginTop="25px">or sign in with:</Box>
          <Box marginTop="25px">
            <FacebookIcon className={classes.iconfa} />
            <TwitterIcon className={classes.icontw} />
            <LinkedInIcon className={classes.iconin} />
            <GitHubIcon className={classes.icongit} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default SignIn;
