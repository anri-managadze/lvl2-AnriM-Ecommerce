import React from 'react';
import {FormikProvider, useFormik, Field} from 'formik';
import CheckBox from "../page-component/CheckBox";
import {Box, Button, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from "./SignInFormStyle";

const SignInForm = () => {
    const classes=useStyles();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik} >
                <Box className={classes.field}>
                    <Field type="email" name="email"  component={TextField} variant="outlined" label="Your Email"  size="small" className={classes.field1} />
                    <Field type="password" name="password"  component={TextField} variant="outlined" label="Your Password"  size="small" className={classes.field2}/>
                </Box>
                </FormikProvider>
            <Box display='flex' justifyContent='space-between' marginTop='15px'>
                <CheckBox label='REMEMBER ME' value='remember'/>
                <Link to='#' className={classes.link}> Forgot password? </Link>
            </Box>
            <Box textAlign='center'>
                <Button type="submit" className={classes.btn} variant="contained" >Sign In</Button>
            </Box>
        </form>
    );
};
export  default SignInForm;