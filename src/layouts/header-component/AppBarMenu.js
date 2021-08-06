import React, {useContext, useEffect} from "react";
import CustomizedBadges from "./CustomizedBadges";
import { Box } from "@material-ui/core";
import SplitButton from "./SplitButton";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import {ADMIN, HOME, PRIVATE, SIGN_IN, SIGN_UP} from "../../roures";
import { useStyles } from "./AppBarMenuStyle";
import {UserContext} from "../../store/UserContextProvider";


const AppBarMenu = ({ display, textAlign }) => {
  const classes = useStyles();
  const userData=useContext(UserContext);
  const history = useHistory();

  const LogOut=()=> {
      userData.setData ({
          ...userData.data,
          isLogedIn: false,
          isLogedOut: true,
          user: null
      })
      localStorage.removeItem('token')
      history.push(HOME)
  }

  useEffect(() => {
        console.log(userData);
  },[]);


  return (
          <Box display={display} textAlign={textAlign}>
              <Box marginTop="-6px"><CustomizedBadges /></Box>
              <Box><SplitButton /></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to={ADMIN}>Admin</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Shop</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Contact</Link></Button></Box>

              {userData.data.isLogedIn ? (
                  <>
                      <Link to={PRIVATE}> <Box  className={classes.profile}> </Box></Link>
                  <Box><Button color="inherit" onClick={LogOut} className={classes.btnall}><Link className={classes.link} to={''}>LogOut</Link></Button></Box>
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
