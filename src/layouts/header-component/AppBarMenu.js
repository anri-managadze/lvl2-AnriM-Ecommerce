import React from "react";
import CustomizedBadges from "./CustomizedBadges";
import { Box } from "@material-ui/core";
import SplitButton from "./SplitButton";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from "react-router-dom";
import {ADMIN, HOME, PRIVATE, SIGN_IN, SIGN_UP} from "../../roures";
import { useStyles } from "./AppBarMenuStyle";
// import {UserContext} from "../../store/UserContextProvider";
import {useDispatch, useSelector} from "react-redux";
import {setLogedIn, setUser} from "../../store/user/userActionsCreator";
import {selectLogedIn} from "../../store/user/userSelector";


const AppBarMenu = ({ display, textAlign }) => {
  const classes = useStyles();
  // const userData=useContext(UserContext);
  const history = useHistory();
  const isLogedIn = useSelector(selectLogedIn);
  const dispatch=useDispatch();
  const LogOut=()=> {

      // userData.setData ({
      //     ...userData.data,
      //     isLogedIn: false,
      //     isLogedOut: true,
      //     user: null
      // })

      dispatch(setLogedIn(false))
      dispatch(setUser(null))
      localStorage.removeItem('token')
      history.push(HOME)
  }

  return (
          <Box display={display} textAlign={textAlign}>
              <Box marginTop="-6px"><CustomizedBadges /></Box>
              <Box><SplitButton /></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to={ADMIN}>Admin</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Shop</Link></Button></Box>
              <Box><Button color="inherit" className={classes.btnall}><Link className={classes.link} to='#'>Contact</Link></Button></Box>

              {isLogedIn ? (
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
