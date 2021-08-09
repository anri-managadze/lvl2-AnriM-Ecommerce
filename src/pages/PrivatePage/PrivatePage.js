import React, {useContext, useEffect} from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {UserContext} from "../../store/UserContextProvider";
import {setUser} from "../../store/user/userActionsCreator";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 340,
    },
});
const PrivatePage = () => {
    // const userData=useContext(UserContext);
    let dispatch=useDispatch();
    const classes = useStyles();


    useEffect(() => {
        dispatch(setUser( {
            isLogedIn: true,
            isLogedOut: false,
        }))
        console.log(setUser.isLogedIn)
    }, []);


  return (<>
      {typeof setUser.isLogedIn === 'undefined' ?
    <MainLayout>
        <Box padding='70px '>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={setUser.avatar}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {setUser.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {setUser.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
    </MainLayout> : ('')}
      </>
  );
};

export default PrivatePage;
