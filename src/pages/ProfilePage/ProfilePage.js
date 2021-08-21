import React from "react";
import {Box, Button, CardActionArea, Container, Grid,  TextField} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
// import {UserContext} from "../../store/UserContextProvider";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/userSelector";
import {useFormik} from "formik";
import {useStyles} from "./ProfilePageStyle";
import {Api} from "../../api";
import {setUser} from "../../store/user/userActionsCreator";
import {updateUserProfile} from "../../store/user/userAction";


const ProfilePage = () => {
    // const userData=useContext(UserContext);
    const classes = useStyles();
    let dispatch = useDispatch();
    const user = useSelector(selectUser);


    const formik = useFormik({
        initialValues: {
            name: user&& user.name,
            avatar: ''
        },
        onSubmit: (values) => {
            dispatch(updateUserProfile(user.id,values.name,values.avatar))
        }
    });

  return (
      <>
    <MainLayout>
        <Container>
        <Grid container className={classes.root}>
            <Grid item sm={4}>
                 <CardActionArea className={classes.media}>
                         <img src={user.avatar} className={classes.image} alt='surati'/>
                 </CardActionArea>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                    />
                    <TextField
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={(e) =>
                            formik.setFieldValue("avatar", (e.target.files[0]))
                        }
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
    </MainLayout>
      </>
  );
};

export default ProfilePage;
