import React, {useContext, useEffect} from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {user, UserContext} from "../../store/UserContextProvider";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 340,
    },
});
const PrivatePage = () => {
    const userData=useContext(UserContext);
    const classes = useStyles();
    useEffect(() => {
        userData.setData({
            ...userData.data,
            user: user.user
        })
    },[]);

  return (
    <MainLayout>
        <Box padding='70px '>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={userData.data.user.avatar}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {userData.data.user.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {userData.data.user.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Box>
    </MainLayout>
  );
};

export default PrivatePage;
