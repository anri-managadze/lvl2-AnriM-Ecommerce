import React from "react";
import {Box,  CardActionArea,  makeStyles} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
// import {UserContext} from "../../store/UserContextProvider";
import {useSelector} from "react-redux";
import {selectLogedIn, selectUser} from "../../store/user/userSelector";

const useStyles = makeStyles({
    root: {
        minWidth: '90%',
        padding: '10%',
        display: 'flex'
    },
    media: {
        width:320,
    },
    image: {
        width:220,
        height: 220,
        borderRadius: '50%'
    },
    info: {
        margin: '20px 0 0 20px',
        borderBottom: '2px solid #1266F1',
        padding: '10px',
        display: "flex"
    }
});
const ProfilePage = () => {
    // const userData=useContext(UserContext);

    const classes = useStyles();
    const user=useSelector(selectUser);
    const isLogedIn = useSelector(selectLogedIn)
    console.log(user)
    console.log(isLogedIn)

  return (<>
      {isLogedIn &&
    <MainLayout>
        <Box className={classes.root}>
            <CardActionArea className={classes.media}>
                    <img src={user.avatar} className={classes.image} alt='surati'/>
            </CardActionArea>
            <Box>
                <Box className={classes.info}> Name: {user.name}</Box>
                <Box className={classes.info}> Email: {user.email}</Box>
            </Box>
        </Box>

    </MainLayout> }
      </>
  );
};

export default ProfilePage;
