import React from 'react';
import {FormikProvider, useFormik} from 'formik';
import CheckBox from "../../../page-component/CheckBox";
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
            console.log(values)
            fetch('http://159.65.126.180/api/auth/login',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email: formik.values.email,
                        password: formik.values. password,
                    }
                )
            })
                .then(res=>res.json())
                .then(json=> {
                    console.log(json)
                })
                .catch(error => console.log(error, 'error'));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormikProvider value={formik} >
                <Box className={classes.field}>
                    <TextField type="email" name="email"   variant="outlined" label="Your Email"  size="small" onChange={formik.handleChange} value={formik.values.email} className={classes.field1} />
                    <TextField type="password" name="password"  variant="outlined" label="Your Password"  size="small" onChange={formik.handleChange} value={formik.values.password} className={classes.field2}/>
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