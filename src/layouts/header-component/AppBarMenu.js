import React from "react";
import CustomizedBadges from "./CustomizedBadges";
import { Box } from "@material-ui/core";
import SplitButton from "./SplitButton";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {ADMIN, CART, SIGN_IN, SIGN_UP} from "../../roures";
import { useStyles } from "./AppBarMenuStyle";
// import {UserContext} from "../../store/UserContextProvider";
import {useSelector} from "react-redux";

import {selectLogedIn} from "../../store/user/userSelector";
import ProfButton from "./ProfButton";


const AppBarMenu = ({ display, textAlign }) => {
  const classes = useStyles();
  // const userData=useContext(UserContext);

  const isLogedIn = useSelector(selectLogedIn);


  return (
          <Box display={display} textAlign={textAlign}>
              <Box marginTop="-6px"><Link to={CART}><CustomizedBadges /></Link></Box>
              <Box><SplitButton /></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to={ADMIN}>Admin</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Shop</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Contact</Link></Button></Box>

              {isLogedIn ? (
                  <>
                     <ProfButton />
                  </>
                  ) :
                  (<>
                    <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to={SIGN_IN}>Sign in</Link></Button></Box>
                    <Box><Button color="inherit" className={classes.btnsignup}><Link className={classes.link} to={SIGN_UP}>Sign up</Link></Button></Box>
                  </>
              )}
              </Box>
  );

};

export default AppBarMenu;
