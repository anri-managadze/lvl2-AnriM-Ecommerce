import React from "react";
import CustomizedBadges from "./CustomizedBadges";
import { Box } from "@material-ui/core";
import SplitButton from "./SplitButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ADMIN, SIGN_IN, SIGN_UP } from "../../roures";
import { useStyles } from "./AppBarMenuStyle";

const AppBarMenu = ({ display, textAlign }) => {
  const classes = useStyles();
  return (
    <Box display={display} textAlign={textAlign}>
      <Box marginTop="-6px">
        <CustomizedBadges />
      </Box>
      <Box>
        <SplitButton />
      </Box>
      <Box>
        <Button color="inherit" className={classes.btnall}>
          <Link className={classes.link} to={ADMIN}>
            Admin
          </Link>
        </Button>
      </Box>
      <Box>
        <Button color="inherit" className={classes.btnall}>
          <Link className={classes.link}>Shop</Link>
        </Button>
      </Box>
      <Box>
        <Button color="inherit" className={classes.btnall}>
          <Link className={classes.link}>Contact</Link>
        </Button>
      </Box>
      <Box>
        <Button color="inherit" className={classes.btnall}>
          <Link className={classes.link} to={SIGN_IN}>
            Sign in
          </Link>
        </Button>
      </Box>
      <Box>
        <Button color="inherit" className={classes.btnsignup}>
          <Link className={classes.link} to={SIGN_UP}>
            Sign up
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default AppBarMenu;
