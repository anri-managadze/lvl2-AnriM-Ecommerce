import React from "react";
import {Box, Button, CardActionArea, Container, Grid, TextField} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
// import {UserContext} from "../../store/UserContextProvider";
import {useDispatch, useSelector} from "react-redux";
import {selectLogedIn, selectUser} from "../../store/user/userSelector";
import {setUser} from "../../store/user/userActionsCreator";
import {useFormik} from "formik";
import {Api} from "../../api";
import {useStyles} from "./ProfilePageStyle";


const ProfilePage = () => {
    // const userData=useContext(UserContext);
    const classes = useStyles();
    const isLogedIn = useSelector(selectLogedIn)
    let dispatch = useDispatch();
    const user = useSelector(selectUser);



    const addPhoto = (e) => {
        if (e.target.files.length  && e.target.files[0]) {
            dispatch(setUser({...user, avatar: URL.createObjectURL(e.target.files[0])}));
        }
    };

    const formik = useFormik({
        initialValues: {
            avatar: ''
        },
        onSubmit: (values) => {
            Api.update(user.id, {avatar: values.avatar},)
                .then((data) => {
                    dispatch(setUser(data));
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    });


  return (<>
      {isLogedIn &&
    <MainLayout>
        <Container>
        <Grid container className={classes.root}>
            <Grid item sm={4}>
                 <CardActionArea className={classes.media}>
                         <img src={user.avatar} className={classes.image} alt='surati'/>
                 </CardActionArea>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        type="file"
                        name="avatar"
                        id="avatar"
                        accept="image/*"
                        onChange={(e)=>addPhoto(e)}

                    />
                    <Button type='submit'>Submit</Button>
                </form>
            </Grid>
            <Grid item sm={8}>
                <Box className={classes.info}> Name: {user.name}</Box>
                <Box className={classes.info}> Email: {user.email}</Box>
            </Grid>
        </Grid>
        </Container>
    </MainLayout> }
      </>
  );
};

export default ProfilePage;
