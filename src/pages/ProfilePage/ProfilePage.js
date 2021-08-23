import React from "react";
import {Box, Button, CardActionArea, Container, Grid,  TextField} from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
// import {UserContext} from "../../store/UserContextProvider";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/userSelector";
import {useFormik} from "formik";
import {useStyles} from "./ProfilePageStyle";
import {updateUserProfile} from "../../store/user/userAction";
import Modal from "../../component/Modal";


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
            </Grid>
            <Grid item sm={8}>
                <Box className={classes.info}> Email: {user.email}</Box>
                <Box className={classes.info}> Name: {user.name}</Box>
            </Grid>
        </Grid>
            <Modal title='Change Information' btntitle='Upload Information' component={Box} margin='15px auto'>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' flexDirection='column'>
                <TextField
                    type="file"
                    name="avatar"
                    id="avatar"
                    variant="outlined"  size="small"
                    onChange={(e) =>
                        formik.setFieldValue("avatar", (e.target.files[0]))
                    }
                />
                <TextField
                    type="text"
                    name="name"
                    id="name"
                    onChange={formik.handleChange}
                    variant="outlined" label="Change Name" size="small"
                    className={classes.chemail}
                />
                <Button type='submit' className={classes.subBtn}>Submit</Button>
                </Box>
            </form>
            </Modal>
        </Container>
    </MainLayout>
      </>
  );
};

export default ProfilePage;
