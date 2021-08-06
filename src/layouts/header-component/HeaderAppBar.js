import AppBar from "@material-ui/core/AppBar";
import { Box, Container, Hidden } from "@material-ui/core";
import AppBarMenu from "./AppBarMenu";
import ListMenu from "../../pages/List/components/ListMenu";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { LIST } from "../../roures";
import { useStyles } from "./HeaderAppBarStyle";
import { FaMdb } from "react-icons/fa";

export default function HeaderAppBar() {
  const classes = useStyles();
  return (

    <Container className={classes.header}>
      <AppBar
        position="static"
        component={Box}
        bgcolor="white"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="10px 50px 0 50px"
        className={classes.elevation4}
      >
        <Link to={LIST} className={classes.list}>
          <FaMdb className={classes.headicon} />
        </Link>
        <Box>
          <Hidden xsDown>
            <AppBarMenu display={"flex"} justifyContent={"flex-end"} />
          </Hidden>
          <Hidden smUp>
            <ListMenu
              text={<MenuIcon className={classes.icon} />}
              flexDirection={"row-reverse"}
              width={"250px"}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <AppBarMenu display={"column"} textAlign={"center"} />
            </ListMenu>
          </Hidden>
        </Box>
      </AppBar>
    </Container>
  );
}
